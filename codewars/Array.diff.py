# Array.diff
# https://www.codewars.com/kata/523f5d21c841566fde000009/train/python

def array_diff(a, b):
    return [x for x in a if x not in b]
