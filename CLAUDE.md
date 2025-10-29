# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a visual regression testing project using reg-suit with Playwright for cross-browser screenshot capture and comparison.

## Common Commands

- `npm run reg:compare` - Run visual regression comparison using reg-suit
- `npm run reg:open` - Open the regression test report in browser
- `node test.js` - Generate new screenshots using Playwright across browsers

## Architecture

### Screenshot Generation (`test.js`)
- Uses Playwright to capture screenshots across Chromium, Firefox, and Webkit
- Targets a local server at `http://localhost:5000/ari_eval_af`
- Automatically adjusts viewport to page content size
- Saves screenshots to `directory_contains_actual_images/` with browser-specific naming

### Regression Testing Setup
- **Configuration**: `regconfig.json` defines working directory, actual directory, and comparison thresholds
- **Results**: `reg.json` contains comparison results with failed, new, deleted, and passed items
- **Test Structure**:
  - `regTest/expected/` - Baseline images for comparison
  - `regTest/actual/` - Current screenshots to compare against baselines
  - `regTest/diff/` - Visual difference images when tests fail
  - `regTest/index.html` - HTML report showing comparison results

### Workflow
1. Run `node test.js` to generate current screenshots
2. Run `npm run reg:compare` to compare against expected images
3. Use `npm run reg:open` to view detailed comparison results

## Dependencies
- **reg-suit**: Core visual regression testing framework
- **playwright**: Cross-browser automation for screenshot capture
- **reg-*-plugin**: Various plugins for Git integration, GitHub notifications, and S3 publishing