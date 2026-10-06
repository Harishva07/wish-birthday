import codecs
import re

file_path = 'assets/Receiver-BmwKL-ky.js'
content = codecs.open(file_path, 'r', 'utf-8').read()

pattern = re.compile(r'(j === M\.LANDING &&\s*e\.jsx\("button", \{\s*className:\s*"fixed inset-0 z-\[100\].*?\}\),)', re.DOTALL)
match = pattern.search(content)

if match:
    old_code = match.group(0)
    new_code = old_code.replace('j === M.LANDING &&', 'j === M.LANDING && Ze &&')
    content = content.replace(old_code, new_code)
    codecs.open(file_path, 'w', 'utf-8').write(content)
    print("SUCCESS: Updated the invisible button logic.")
else:
    print("ERROR: Could not find the button code.")
