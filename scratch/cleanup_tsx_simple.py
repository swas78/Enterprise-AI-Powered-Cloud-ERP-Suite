import os
import re

WORKSPACE_DIR = "/Users/swastikmishra1425/Desktop/PROJECTS/INTERNSHIP PROJECT"
PAGES_DIR = os.path.join(WORKSPACE_DIR, "frontend", "src", "pages")

def clean_file_content(content):
    # 1. Clean className values where disabled/required/etc are broken:
    # e.g., disabled={'{'{'}'}true{'}'}:opacity-50 -> disabled:opacity-50
    content = re.sub(r'\b(disabled|required|readonly|readOnly|autofocus|autoFocus)=([^:\s]+):', r'\1:', content, flags=re.IGNORECASE)
    
    # 2. Fix attributes: disabled={...} or disabled={...}={...} -> disabled={true}
    def attr_replacer(match):
        attr = match.group(1).lower()
        jsx_attr = {
            'disabled': 'disabled',
            'required': 'required',
            'readonly': 'readOnly',
            'autofocus': 'autoFocus'
        }.get(attr, attr)
        return f'{jsx_attr}={{true}}'

    content = re.sub(r'\b(disabled|required|readonly|readOnly|autofocus|autoFocus)=([^\s>]+)', attr_replacer, content, flags=re.IGNORECASE)

    # 3. Clean up text blocks (outside tag brackets)
    parts = re.split(r'(<[^>]+>)', content)
    for idx in range(len(parts)):
        if idx % 2 == 0:
            # Text block
            parts[idx] = parts[idx].replace('required={true}', 'required')
            parts[idx] = parts[idx].replace('disabled={true}', 'disabled')
            parts[idx] = parts[idx].replace('readOnly={true}', 'readonly')
            parts[idx] = parts[idx].replace('autoFocus={true}', 'autofocus')
            parts[idx] = parts[idx].replace('required={false}', 'required')
            parts[idx] = parts[idx].replace('disabled={false}', 'disabled')
            parts[idx] = parts[idx].replace('readOnly={false}', 'readonly')
            parts[idx] = parts[idx].replace('autoFocus={false}', 'autofocus')
            
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
