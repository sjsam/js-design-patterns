// Complex System
class CPU {
  freeze() { /* ... */ }
  jump(position) { /* ... */ }
  execute() { /* ... */ }
}

class Memory {
  load(position, data) { /* ... */ }
}

class HardDrive {
  read(lba, size) { /* ... */ }
}

// Facade
class ComputerFacade {
  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }

  start() {
    this.cpu.freeze();
    this.memory.load(0, this.hardDrive.read(0, 1024));
    this.cpu.jump(0);
    this.cpu.execute();
  }
}

// Usage example:
const computer = new ComputerFacade();
computer.start();
