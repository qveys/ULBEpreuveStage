// // File: npm-scripts/add-component.ts

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
/**
 * Converts a kebab-case string to PascalCase.
 * Example: 'my-component' -> 'MyComponent'
 * 
 * @param str The kebab-case string to convert.
 * @returns The PascalCase version of the input string.
 */
function pascalCase(str: string): string {
  return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}
/**
 * Adds a new component to the project using the provided component name.
 *
 * This function performs the following actions:
 * 1. Executes the `shadcn` command to add the component using npm.
 * 2. Renames the generated TypeScript file from kebab-case to PascalCase.
 *
 * @param componentName - The name of the component in kebab-case.
 *  The function will convert this to PascalCase for the file renaming.
 */
function addComponent(componentName: string): void {
  try {
    // Run the shadcn command
    console.log(`Adding component: ${componentName}`);
    execSync(`npx shadcn@latest add ${componentName}`, { stdio: 'inherit' });

    // Rename the generated file
    // Update uiDir based on your project structure
    const uiDir = path.join(process.cwd(), 'src', 'components', 'ui');
    const oldPath = path.join(uiDir, `${componentName}.tsx`);
    const newPath = path.join(uiDir, `${pascalCase(componentName)}.tsx`);

    if (fs.existsSync(oldPath)) {
      fs.renameSync(oldPath, newPath);
      console.log(`Renamed ${componentName}.tsx to ${pascalCase(componentName)}.tsx`);
    } else {
      console.warn(`Warning: ${componentName}.tsx not found in components/ui directory`);
    }
  } catch (error) {
    console.error('Error adding component:', error);
  }
}

// Get the component name from command-line arguments
const componentName = process.argv[2];

if (!componentName) {
  console.error('Please provide a component name');
  process.exit(1);
}

addComponent(componentName);