import path from 'path';
import os from 'os';
import fs from 'fs';

export interface Mistake {
  id: string;
  date: string;
  description: string;
  severity: number; // 1-5
  lesson?: string;
  tags?: string[];
  fixed?: boolean;
}

export interface AppConfig {
  shell: string;
  remindOnStartup: boolean;
  remindFrequency: number; // percentage chance
  theme: string;
}

const CONFIG_DIR = path.join(os.homedir(), '.mistake-cli');
const MISTAKES_FILE = path.join(CONFIG_DIR, 'mistakes.json');
const CONFIG_FILE = path.join(CONFIG_DIR, 'config.json');

// Ensure config directory exists
export function ensureConfigDir(): void {
  if (!fs.existsSync(CONFIG_DIR)) {
    fs.mkdirSync(CONFIG_DIR, { recursive: true });
  }
}

// Load mistakes
export function loadMistakes(): Mistake[] {
  ensureConfigDir();
  try {
    if (fs.existsSync(MISTAKES_FILE)) {
      const content = fs.readFileSync(MISTAKES_FILE, 'utf-8');
      return JSON.parse(content);
    }
  } catch (error) {
    console.error('Error loading mistakes:', error);
  }
  return [];
}

// Save mistakes
export function saveMistakes(mistakes: Mistake[]): void {
  ensureConfigDir();
  fs.writeFileSync(MISTAKES_FILE, JSON.stringify(mistakes, null, 2), 'utf-8');
}

// Load config
export function loadConfig(): AppConfig {
  ensureConfigDir();
  try {
    if (fs.existsSync(CONFIG_FILE)) {
      const content = fs.readFileSync(CONFIG_FILE, 'utf-8');
      return JSON.parse(content);
    }
  } catch (error) {
    console.error('Error loading config:', error);
  }
  return getDefaultConfig();
}

// Save config
export function saveConfig(config: AppConfig): void {
  ensureConfigDir();
  fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2), 'utf-8');
}

// Get default config
export function getDefaultConfig(): AppConfig {
  const shell = process.platform === 'win32' ? 'powershell' : 'bash';
  return {
    shell,
    remindOnStartup: false,
    remindFrequency: 100,
    theme: 'default'
  };
}

// Get config file path
export function getConfigPath(): string {
  return CONFIG_FILE;
}

// Get mistakes file path
export function getMistakesPath(): string {
  return MISTAKES_FILE;
}

// Get config directory
export function getConfigDir(): string {
  return CONFIG_DIR;
}
