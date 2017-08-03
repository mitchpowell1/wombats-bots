((state, timeLeftFn) => {

    const savedState = state['saved-state'];
    const lastMove = savedState['last-move'];
    const commands = {
      'turnCommand': turnCommand,
      'shootCommand': shootCommand,
    }

    const turnCommand = {
      action: 'turn',
      metadata: {
        direction: 'right',
      },
    }

    const shootCommand = {
      action: 'shoot',
      metadata: {},
    }

    const nextCommand = (
      lastMove == 'turnCommand'
        ? 'shootCommand'
        : 'turnCommand'
    )

    return {
        command: commands[nextCommand],
        state: {
          'last-move': nextCommand
        }
    };
});
