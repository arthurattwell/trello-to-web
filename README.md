# Trello board to web page

This is a simple Jekyll site for generating readable web-page versions of the Trello boards' content.

Your Trello board may contain sensitive information. For that reason, we recommend never publishing this repo's site output anywhere, especially GitHub Pages. To keep your data confidential, never fork this repo, and never make copies of it.

The `_data` folder contains the actual data you export from Trello, so it is not tracked in version control. Never commit anything in the `_data` or `_site` folders to version control. They are already ignored by Git (in `.gitignore`).

## Usage

1. To update the data, go to your Trello board's settings and export as JSON. Save the exported file to `_data` as `default.json`.
1. To build the site, in the root directory run `bundle exec jekyll serve`.

You can use this repo for more than one, default board. For example, to show the data from a board you call `bananas`:

1. Export the board from Trello as JSON and save the file to `_data` as `bananas.json`.
1. Create a new markdown file with page frontmatter (i.e. two rows of `---` at the top) called `bananas.md`, and include this tag in its content:

   ```
   {% include board.html board="bananas" %}
   ```

1. If you created `bananas.md` in the root directory, when you run the site it will be at [http://localhost:4000/bananas](http://localhost:4000/bananas).
