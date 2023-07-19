import { Command } from 'commander';

const program = new Command();

program.version('0.0.1').option('--mode <env>', 'set your enviroment', 'dev');

program.parse(process.argv);

export default program;
