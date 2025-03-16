//Arquivo de configuração

import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

//Limpar qualquer tipo de mook depois de cada teste executado
afterEach(() => {
  cleanup();
});