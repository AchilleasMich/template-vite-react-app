# Contributing to React + TypeScript + Vite Template

Thank you for considering contributing to this project! 🎉

## How to Contribute

### Reporting Issues

If you find a bug or have a feature request:

1. Check if the issue already exists in the [issue tracker](https://github.com/AchilleasMich/template-vite-react-app/issues)
2. If not, create a new issue with a clear title and description
3. Include steps to reproduce (for bugs) or use cases (for features)

### Pull Requests

1. **Fork the repository** and create your branch from `main`:
   ```bash
   git checkout -b feature/my-new-feature
   ```

2. **Make your changes**:
   - Follow the existing code style
   - Write or update tests as needed
   - Update documentation if necessary

3. **Test your changes**:
   ```bash
   npm run lint        # Check for linting errors
   npm run type-check  # Check TypeScript types
   npm test -- --run   # Run all tests
   npm run build       # Ensure build works
   ```

4. **Commit your changes** with a clear commit message:
   ```bash
   git commit -m "feat: add new feature"
   ```

   Follow conventional commits format:
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `style:` - Code style changes (formatting, etc.)
   - `refactor:` - Code refactoring
   - `test:` - Adding or updating tests
   - `chore:` - Maintenance tasks

5. **Push to your fork** and submit a pull request to the `main` branch

6. **Wait for review** - maintainers will review your PR and may request changes

## Development Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Make your changes
5. Run tests: `npm test`

## Code Style

- Use TypeScript for type safety
- Follow ESLint rules (run `npm run lint`)
- Format code with Prettier (run `npm run format`)
- Use functional components with hooks
- Write meaningful variable and function names
- Add comments for complex logic

## Testing Guidelines

- Write tests for new features and bug fixes
- Use React Testing Library for component tests
- Aim for meaningful test coverage
- Tests should be clear and maintainable

## Documentation

- Update README.md if you change functionality
- Add JSDoc comments for complex functions
- Update inline code comments as needed

## Questions?

Feel free to [open an issue](https://github.com/AchilleasMich/template-vite-react-app/issues) if you have questions!

Thank you for contributing! 🙏
