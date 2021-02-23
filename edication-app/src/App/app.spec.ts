'use strict';
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import app from './app';

describe('App', () => {
    let component;
  
    beforeEach(() => {

    });
    afterEach(cleanup);
  
    test('test', () => {
      expect(true).toBe(true);
    });
  });
