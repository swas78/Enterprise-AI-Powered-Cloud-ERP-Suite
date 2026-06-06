import os
import re

WORKSPACE_DIR = "/Users/swastikmishra1425/Desktop/PROJECTS/INTERNSHIP PROJECT"
PAGES_DIR = os.path.join(WORKSPACE_DIR, "frontend", "src", "pages")

def clean_file_content(content):
    # 1. Whole-file replacements for React attributes and SVG tags:
    content = content.replace('preserveaspectratio=', 'preserveAspectRatio=')
    content = content.replace('attributename=', 'attributeName=')
    content = content.replace('<lineargradient', '<linearGradient')
    content = content.replace('</lineargradient>', '</linearGradient>')
    content = content.replace('repeatcount=', 'repeatCount=')
    
    # Clean up maxLength="number" -> maxLength={number}
    content = re.sub(r'\bmaxLength="(\d+)"', r'maxLength={\1}', content)
    content = re.sub(r'\bmaxLength=\'(\d+)\'', r'maxLength={\1}', content)

    # Clean up any leftover weird combinations of quotes, braces and true/false in the whole file:
    # e.g., required'}true{'}'} -> required
    content = re.sub(r'\b(disabled|required|readonly|readOnly|autofocus|autoFocus)[^\w\s<>/="]+(?:true|false)[^\w\s<>/="]+', r'\1', content, flags=re.IGNORECASE)

    # Split content by HTML tags:
    # parts[0], parts[2], parts[4]... are text blocks
    # parts[1], parts[3], parts[5]... are HTML/JSX tags
    parts = re.split(r'(<[^>]+>)', content)
    
    for idx in range(len(parts)):
        segment = parts[idx]
        if not segment:
            continue
            
        if idx % 2 == 1:
            # Inside a tag block!
            # Clean className values where disabled/required/etc are broken:
            # e.g., disabled={...}:opacity-50 -> disabled:opacity-50
            segment = re.sub(r'\b(disabled|required|readonly|readOnly|autofocus|autoFocus)(?:=|\{)[^:\s>]+:', r'\1:', segment, flags=re.IGNORECASE)
            
            # Fix attributes: disabled={...} or disabled{...} -> disabled={true}
            def tag_attr_replacer(match):
                attr = match.group(1).lower()
                jsx_attr = {
                    'disabled': 'disabled',
                    'required': 'required',
                    'readonly': 'readOnly',
                    'autofocus': 'autoFocus'
                }.get(attr, attr)
                return f'{jsx_attr}={{true}}'
                
            segment = re.sub(r'\b(disabled|required|readonly|readOnly|autofocus|autoFocus)(?:=|\{)[^\s>]+', tag_attr_replacer, segment, flags=re.IGNORECASE)
            
            # Clean up checked/selected inside tags
            segment = segment.replace('checked=""', 'checked={true}')
            segment = segment.replace('checked="checked"', 'checked={true}')
            segment = segment.replace('checked=\'\'', 'checked={true}')
            segment = segment.replace('selected=""', 'selected={true}')
            segment = segment.replace('selected="selected"', 'selected={true}')
            segment = segment.replace('selected=\'\'', 'selected={true}')
            
            # Replace loose checked and selected:
            segment = re.sub(r'\bchecked\b(?!=|:)', 'checked={true}', segment)
            segment = re.sub(r'\bselected\b(?!=|:)', 'selected={true}', segment)

            # Just in case there are double JSX attributes like disabled={true}={true}
            segment = segment.replace('required={true}={true}', 'required={true}')
            segment = segment.replace('disabled={true}={true}', 'disabled={true}')
            segment = segment.replace('readOnly={true}={true}', 'readOnly={true}')
            segment = segment.replace('autoFocus={true}={true}', 'autoFocus={true}')
            
            parts[idx] = segment
        else:
            # Outside tags (text block!)
            # Match key followed by = or { and then non-space/non-< characters, and replace with just the key
            def text_replacer(match):
                return match.group(1)
                
            segment = re.sub(r'\b(disabled|required|readonly|readOnly|autofocus|autoFocus)(?:=|\{)[^\s<]+', text_replacer, segment, flags=re.IGNORECASE)
            parts[idx] = segment
            
    return "".join(parts)

def main():
    for root, dirs, files in os.walk(PAGES_DIR):
        for file in files:
            if file.endswith('.tsx'):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_content = clean_file_content(content)
                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Cleaned up: {filepath}")

if __name__ == "__main__":
    main()
