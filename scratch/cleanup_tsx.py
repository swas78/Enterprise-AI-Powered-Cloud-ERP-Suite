import os
import re

WORKSPACE_DIR = "/Users/swastikmishra1425/Desktop/PROJECTS/INTERNSHIP PROJECT"
PAGES_DIR = os.path.join(WORKSPACE_DIR, "frontend", "src", "pages")

def fix_jsx_string(s):
    # e.g., disabled={'{'{'}'}true{'}'}:opacity-50 -> disabled:opacity-50
    s = re.sub(r'\b(disabled|required|readonly|readOnly|autofocus|autoFocus)=([^":\s]+):', r'\1:', s)
    s = re.sub(r'\b(disabled|required|readonly|readOnly|autofocus|autoFocus)=([^"\s]+)', r'\1', s)
    return s

def fix_tag_attributes(s):
    # Inside tag attributes, e.g., <button disabled={...}={...} required={...}>
    def attr_replacer(match):
        attr = match.group(1).lower()
        if attr == 'disabled':
            return 'disabled={true}'
        elif attr == 'required':
            return 'required={true}'
        elif attr in ('readonly', 'readonly'):
            return 'readOnly={true}'
        elif attr in ('autofocus', 'autofocus'):
            return 'autoFocus={true}'
        return match.group(0)

    # Match attr=val where val contains no spaces or >
    s = re.sub(r'\b(disabled|required|readonly|readOnly|autofocus|autoFocus)=([^\s>]+)', attr_replacer, s, flags=re.IGNORECASE)
    return s

def fix_text_block(s):
    # Outside tags (in text blocks), e.g., "Critical attention required={...}"
    # Replace attr=val with just attr where val contains no spaces or <
    s = re.sub(r'\b(disabled|required|readonly|readOnly|autofocus|autoFocus)=([^\s<]+)', r'\1', s, flags=re.IGNORECASE)
    return s

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    result = []
    i = 0
    n = len(content)
    in_tag = False
    curly_depth = 0
    in_string = None  # None, '"', "'", or "`"
    chunk_start = 0

    while i < n:
        char = content[i]

        if not in_tag:
            # We are outside tags. Look for tag start.
            if char == '<' and i + 1 < n and (content[i+1].isalpha() or content[i+1] in ('/', '!', '?')):
                # Process the accumulated text block
                text_chunk = content[chunk_start:i]
                result.append(fix_text_block(text_chunk))
                
                in_tag = True
                chunk_start = i
            i += 1
        else:
            # We are inside a tag.
            if in_string:
                if char == in_string:
                    # Check if escaped
                    if content[i-1] != '\\':
                        # End of string chunk. Process it.
                        string_chunk = content[chunk_start:i+1]
                        result.append(fix_jsx_string(string_chunk))
                        in_string = None
                        chunk_start = i + 1
                i += 1
            else:
                # Outside string, but inside tag.
                if char in ('"', "'", '`') and curly_depth == 0:
                    # Process tag attributes accumulated so far
                    attr_chunk = content[chunk_start:i]
                    result.append(fix_tag_attributes(attr_chunk))
                    
                    in_string = char
                    chunk_start = i
                    i += 1
                elif char == '{':
                    curly_depth += 1
                    i += 1
                elif char == '}':
                    curly_depth = max(0, curly_depth - 1)
                    i += 1
                elif curly_depth == 0 and char == '>':
                    # Process tag attributes accumulated before tag ends
                    attr_chunk = content[chunk_start:i]
                    result.append(fix_tag_attributes(attr_chunk))
                    
                    in_tag = False
                    chunk_start = i
                    i += 1
                else:
                    i += 1

    # Add remaining chunk
    remaining = content[chunk_start:]
    if in_tag:
        result.append(fix_tag_attributes(remaining))
    else:
        result.append(fix_text_block(remaining))

    final_content = "".join(result)
    
    if final_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(final_content)
        print(f"Fixed: {filepath}")

def main():
    for root, dirs, files in os.walk(PAGES_DIR):
        for file in files:
            if file.endswith('.tsx'):
                filepath = os.path.join(root, file)
                process_file(filepath)

if __name__ == "__main__":
    main()
