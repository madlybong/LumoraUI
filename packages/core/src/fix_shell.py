import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the component name from the filename
    basename = os.path.basename(filepath)
    comp_name = basename.replace('.vue', '')
    
    # Kebab case conversion for css classes
    kebab_name = re.sub(r'(?<!^)(?=[A-Z])', '-', comp_name).lower()

    if 'resolveSkin' not in content:
        return

    print(f"Processing {filepath}")

    # Remove the import of useLumoraConfig
    content = re.sub(r'import\s+{\s*useLumoraConfig\s*}\s+from\s+[\'"][^\'"]+[\'"];\n', '', content)
    
    # Remove the destructuring of resolveSkin
    content = re.sub(r'\s*const\s+{\s*resolveSkin\s*}\s*=\s*useLumoraConfig\(\);\n', '\n', content)

    # Search for all resolveSkin usage
    def repl(match):
        skin_name = match.group(1)
        args_str = match.group(2) if match.group(2) else ""
        
        # Convert skin_name to kebab_case
        kebab_skin = re.sub(r'(?<!^)(?=[A-Z])', '-', skin_name).lower()
        
        if not args_str:
            return f'`{kebab_skin}`'
        elif args_str.strip() == '"expanded"':
            return f'`{kebab_skin}--expanded`'
        elif args_str.strip() == '"active"':
            return f'`{kebab_skin}--active`'
        else:
            return f'`{kebab_skin} ${{{args_str} && {args_str} !== "default" ? "{kebab_skin}--"+{args_str} : ""}}`.trim()'

    content = re.sub(r'resolveSkin\("([^"]+)"(?:,\s*([^)]+))?\)', repl, content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for root, dirs, files in os.walk('c:/xLab/xlab26/lumora/LumoraUI/packages/core/src/shell'):
    for file in files:
        if file.endswith('.vue'):
            process_file(os.path.join(root, file))
