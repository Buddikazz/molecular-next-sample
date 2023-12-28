# molecular-next-sample

1) cd molecular-next-sample
2) mgnl jumpstart
3) mgnl start
4) Visit http://localhost:8080/magnoliaAutho
6) Create New Page by Naming "staysure-brochure" and select "Next: Staysure Brochure" template
7) Open another terminal
8) CD spa-next-app/brochure_next-app
9) npm install
10) npm run dev

### DAM

In order for images to be displayed:
Open the Security app, open the `Roles` tab, edit the `rest-anonymous` role, go to `Web access` tab, `Add new` with this path `/dam/*` set to GET.

In `Access control lists` tab modify `Dam` workspace by allowing `Read-only` access to `Selected and sub nodes` to `/`.
