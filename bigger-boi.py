def wombat(state, time_left):
    import urllib2
    import json
    command = json.loads(urllib2.urlopen('https://wombackend.herokuapp.com/').read())
    return {
        'command': command,
        'state': {
            'hello': 'world'
        }
    }
