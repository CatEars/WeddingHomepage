import json
import os


def read_json_file(fname):
    with open(f'inbox/{fname}', encoding='utf8') as f:
        content = f.read()
    return json.loads(content)

def get_inbox():
    return [read_json_file(fname) for fname in sorted(os.listdir('inbox'))]


def print_attending_people():
    attendees = filter(lambda x: x['willAttend'], get_inbox())
    idx = 1
    for party in attendees:
        print(f' === Party #{idx} ===')
        idx += 1
        for person in party['people']:
            name = person['name']    
            food = person['foodChoice']
            allergies = person['allergies']
            print('   - (' + name.ljust(20) + ', ' + food.ljust(10) + ', ' + allergies + ')')

def print_missing_people():
    non_attendees = filter(lambda x: not x['willAttend'], get_inbox())
    
    print(' === Will not attend ===')
    for party in non_attendees:
        for person in party['people']:
            name = person['name']
            print(f'   - {name}')



print_attending_people()
print_missing_people()
