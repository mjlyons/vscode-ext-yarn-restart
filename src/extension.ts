import * as vscode from 'vscode';
// import * as child_process from 'child_process';

// let _terminal: vscode.Terminal | undefined;
// let currentProcess: child_process.ChildProcess | undefined;

// const getTerminal = (): vscode.Terminal => {
//   if (!_terminal) {
//     _terminal = vscode.window.createTerminal('Yarn Restart');
//     if (!_terminal) throw new Error('Terminal not initialized')
//   }

//   return _terminal;
// }

let _terminal: vscode.Terminal | undefined;

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('yarn-restart.run', () => {

    if (_terminal) {
      _terminal.dispose();
      _terminal = undefined;
    }

    _terminal = vscode.window.createTerminal('Yarn Start', 'yarn', ['start']);
    _terminal.show(true);

    // getTerminal().show(true);

    // if (currentProcess) {
    //   currentProcess.kill();
    //   currentProcess = undefined;
    // }

    // currentProcess = child_process.spawn('yarn', ['start'], { cwd: vscode.workspace.rootPath });

    // currentProcess.stdout?.on('data', (data) => {
    //   getTerminal().sendText(data.toString());
    // });

    // currentProcess.stderr?.on('data', (data) => {
    //   getTerminal().sendText(data.toString());
    // });

    // currentProcess.on('exit', (code) => {
    //   currentProcess = undefined;
    //   getTerminal().sendText(`\nProcess exited with code ${code}`);
    // });

    // getTerminal().sendText('Running "yarn start"\n');

    // const disposable = vscode.window.onDidCloseTerminal((closedTerminal) => {
    //   if (closedTerminal === getTerminal()) {
    //     _terminal = undefined;
    //     if (currentProcess) {
    //       currentProcess.kill();
    //       currentProcess = undefined;
    //     }
    //   }
    // });

    context.subscriptions.push(disposable);
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}