def wombat(state, time_left):
    import urllib.request
    urllib.request.urlopen('http://example.com/foo/bar').read()
    return {
        'command': {
            'action': 'turn',
            'metadata': {
                'direction': 'right'
            }
        },
        'state': {
            'hello': 'world'
        }
    }
