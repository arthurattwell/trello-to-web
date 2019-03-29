# Trello board to web page

This is a simple Jekyll site for generating readable web-page versions of Trello board content. For instance, if you want all the content from a given board on a single page for sharing or printing to PDF.

Currently, it only displays each card's name, the list it's on, and the card description. The web page includes a filter for showing only the cards that contain a certain phrase or list name.

## Warning

Your Trello boards may contain sensitive information. For that reason, we recommend never publishing this repo's site output anywhere, including on GitHub Pages.

The `_data` folder contains the actual data you export from Trello, so it is not tracked in version control. To avoid accidentally sharing sensitive data from your Trello boards, never commit anything in the `_data` or `_site` folders to version control. They are already ignored by Git (in `.gitignore`).

## Usage

You need to have [Jekyll installed](https://jekyllrb.com/docs/installation/) first.

1. Clone or copy this repo.
1. Go to your Trello board's settings and export as JSON. Save the exported file to the `_data` folder here as `default.json`.
1. In a terminal in the root directory of this repo, run `bundle exec jekyll serve`.
1. In your web browser, go to `localhost:4000`.

You can use this repo for more than one, default board. For example, to show the data from a board you call `bananas`:

1. Export the board from Trello as JSON and save the file to `_data` as `bananas.json`.
1. In the root of this repo, create a new markdown file with page frontmatter (i.e. two rows of `---` at the top) called `bananas.md`, and include this tag in its content:

   ```
   {% include board.html board="bananas" %}
   ```

1. If you created `bananas.md` in the root directory, when you run the site it will be at [http://localhost:4000/bananas](http://localhost:4000/bananas).
