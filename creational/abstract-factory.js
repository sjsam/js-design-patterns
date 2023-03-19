class Button {
  paint() {
    throw new Error("Not implemented!");
  }
}

class MacButton extends Button {
  paint() {
    console.log("Painting a Mac button.");
  }
}

class WindowsButton extends Button {
  paint() {
    console.log("Painting a Windows button.");
  }
}

class Checkbox {
  paint() {
    throw new Error("Not implemented!");
  }
}

class MacCheckbox extends Checkbox {
  paint() {
    console.log("Painting a Mac checkbox.");
  }
}

class WindowsCheckbox extends Checkbox {
  paint() {
    console.log("Painting a Windows checkbox.");
  }
}

class GUIFactory {
  createButton() {
    throw new Error("Not implemented!");
  }

  createCheckbox() {
    throw new Error("Not implemented!");
  }
}

class MacGUIFactory extends GUIFactory {
  createButton() {
    return new MacButton();
  }

  createCheckbox() {
    return new MacCheckbox();
  }
}

class WindowsGUIFactory extends GUIFactory {
  createButton() {
    return new WindowsButton();
  }

  createCheckbox() {
    return new WindowsCheckbox();
  }
}

// Usage example:
let factory;

if (process.platform === "darwin") {
  factory = new MacGUIFactory();
} else {
  factory = new WindowsGUIFactory();
}

const button = factory.createButton();
const checkbox = factory.createCheckbox();

button.paint(); // Output: Painting a Mac button. (on macOS)
checkbox.paint(); // Output: Painting a Mac checkbox. (on macOS)
