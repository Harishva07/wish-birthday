import codecs
import glob
import re

files = glob.glob('assets/*.js')
for f in files:
    content = codecs.open(f, 'r', 'utf-8').read()
    
    # Replace dpr:[1, 2] with dpr:[1, 1.25]
    new_content = re.sub(r'dpr:\s*\[1,\s*2\]', 'dpr: [1, 1.25]', content)
    
    # Replace dpr:[1, 1.5] with dpr:[1, 1.25]
    new_content = re.sub(r'dpr:\s*\[1,\s*1\.5\]', 'dpr: [1, 1.25]', new_content)
    
    if content != new_content:
        codecs.open(f, 'w', 'utf-8').write(new_content)
        print(f"Updated {f}")

print("Done updating dpr values.")
