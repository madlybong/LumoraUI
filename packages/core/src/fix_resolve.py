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

    # Special handling for each file's specific resolution logic
    # In layout components, it's mostly straightforward computed props
    
    if comp_name == 'LuDock':
        content = re.sub(
            r'const resolvedSkin = computed\(\(\) => resolveSkin\("LuDock", props\.variant\)\);',
            f'const resolvedSkin = computed(() => `{kebab_name} ${{props.variant && props.variant !== "default" ? "{kebab_name}--"+props.variant : ""}}`.trim());',
            content
        )
    elif comp_name == 'LuDockItem':
        content = re.sub(
            r'const resolvedSkin = computed\(\(\) => \[\s*resolveSkin\("LuDockItem", props\.dock \?\? props\.variant\)\s*\]\);',
            f'const resolvedSkin = computed(() => `{kebab_name} ${{props.dock && props.dock !== "default" ? "{kebab_name}--"+props.dock : props.variant && props.variant !== "default" ? "{kebab_name}--"+props.variant : ""}}`.trim());',
            content
        )
    elif comp_name == 'LuFill':
        content = re.sub(
            r'const resolvedSkin = computed\(\(\) => resolveSkin\("LuFill", props\.variant\)\);',
            f'const resolvedSkin = computed(() => `{kebab_name} ${{props.variant && props.variant !== "default" ? "{kebab_name}--"+props.variant : ""}}`.trim());',
            content
        )
    elif comp_name == 'LuFixed':
        content = re.sub(
            r'const resolvedSkin = computed\(\(\) => resolveSkin\("LuFixed", props\.variant\)\);',
            f'const resolvedSkin = computed(() => `{kebab_name} ${{props.variant && props.variant !== "default" ? "{kebab_name}--"+props.variant : ""}}`.trim());',
            content
        )
    elif comp_name == 'LuGrid':
        content = re.sub(
            r'const resolvedSkin = computed\(\(\) => \[\s*resolveSkin\("LuGrid", props\.variant\),\s*colsClass\.value\s*\]\.filter\(Boolean\)\.join\(" "\)\);',
            f'const resolvedSkin = computed(() => [`{kebab_name} ${{props.variant && props.variant !== "default" ? "{kebab_name}--"+props.variant : ""}}`.trim(), colsClass.value].filter(Boolean).join(" "));',
            content
        )
    elif comp_name == 'LuOverlay':
        content = re.sub(
            r'const resolvedSkin = computed\(\(\) => resolveSkin\("LuOverlay", props\.variant\)\);',
            f'const resolvedSkin = computed(() => `{kebab_name} ${{props.variant && props.variant !== "default" ? "{kebab_name}--"+props.variant : ""}}`.trim());',
            content
        )
    elif comp_name == 'LuScroll':
        content = re.sub(
            r'const resolvedSkin = computed\(\(\) => \[\s*resolveSkin\("LuScroll", props\.variant\)\s*\]\);',
            f'const resolvedSkin = computed(() => `{kebab_name} ${{props.variant && props.variant !== "default" ? "{kebab_name}--"+props.variant : ""}}`.trim());',
            content
        )
    elif comp_name == 'LuSplit':
        content = re.sub(
            r'const resolvedSkin = computed\(\(\) => resolveSkin\("LuSplit", props\.direction \?\? props\.variant\)\);',
            f'const resolvedSkin = computed(() => `{kebab_name} ${{props.direction ? "{kebab_name}--"+props.direction : props.variant && props.variant !== "default" ? "{kebab_name}--"+props.variant : ""}}`.trim());',
            content
        )
    elif comp_name == 'LuSplitPane':
        content = re.sub(
            r'const resolvedSkin = computed\(\(\) => resolveSkin\("LuSplitPane", props\.variant\)\);',
            f'const resolvedSkin = computed(() => `{kebab_name} ${{props.variant && props.variant !== "default" ? "{kebab_name}--"+props.variant : ""}}`.trim());',
            content
        )
    elif comp_name == 'LuSplitResizer':
        content = re.sub(
            r'const resolvedSkin = computed\(\(\) => \[\s*resolveSkin\("LuSplitResizer", unref\(direction\) === "horizontal" \? "horizontal" : "vertical"\)\s*\]\);',
            f'const resolvedSkin = computed(() => `{kebab_name} ${{unref(direction) === "horizontal" ? "{kebab_name}--horizontal" : "{kebab_name}--vertical"}}`);',
            content
        )
    elif comp_name == 'LuStack':
        content = re.sub(
            r'const skin = resolveSkin\("LuStack", props\.direction \?\? props\.variant\);',
            f'const skin = `{kebab_name} ${{props.direction ? "{kebab_name}--"+props.direction : props.variant && props.variant !== "default" ? "{kebab_name}--"+props.variant : ""}}`.trim();',
            content
        )

    # Shell components usually just do: resolveSkin("CompName", props.variant)
    else:
        # A generic fallback for the standard resolvedSkin pattern
        content = re.sub(
            rf'const resolvedSkin = computed\(\(\) => resolveSkin\("{comp_name}", props\.variant\)\);',
            f'const resolvedSkin = computed(() => `{kebab_name} ${{props.variant && props.variant !== "default" ? "{kebab_name}--"+props.variant : ""}}`.trim());',
            content
        )
        content = re.sub(
            rf'const resolvedSkin = computed\(\(\) => \[\s*resolveSkin\("{comp_name}", props\.variant\)\s*\]\);',
            f'const resolvedSkin = computed(() => `{kebab_name} ${{props.variant && props.variant !== "default" ? "{kebab_name}--"+props.variant : ""}}`.trim());',
            content
        )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)


for root, dirs, files in os.walk('c:/xLab/xlab26/lumora/LumoraUI/packages/core/src/layout'):
    for file in files:
        if file.endswith('.vue'):
            process_file(os.path.join(root, file))

for root, dirs, files in os.walk('c:/xLab/xlab26/lumora/LumoraUI/packages/core/src/shell'):
    for file in files:
        if file.endswith('.vue'):
            process_file(os.path.join(root, file))
