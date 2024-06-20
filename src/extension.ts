import * as vscode from 'vscode';

let _terminal: vscode.Terminal | undefined;

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('yarn-restart.run', () => {

    if (_terminal) {
      _terminal.dispose();
      _terminal = undefined;
    }

    _terminal = vscode.window.createTerminal('Yarn Start', 'yarn', ['start']);
    _terminal.show(true);

    context.subscriptions.push(disposable);
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}