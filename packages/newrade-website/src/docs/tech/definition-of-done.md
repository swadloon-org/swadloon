# Definition of 'Done'

## General Definition

- Code is peer reviewed
- Code is checked in
- Code is deployed to test environment
- Code/feature passes regression testing
- Code/feature passes smoke testing
- Code is documented
- Help documentation is updated
- Feature is OK’d by stakeholders

## Practical Workflow

1. New feature or fix is put on a new branch `/fix-something`
1. Unit tests are added if the change affects libraries
1. End to end tests (integration) are added if the change affects applications
1. Feature of fix is deemed ready to be merged into `/dev`
1. PR is opened on Github
1. Assign reviewer to PR
1. Review is done on the code
1. Branch is merged if acceptable
1. The task is done when the code is merged into `/dev`
