# Sauti Yako

Sauti Yako is a public service request portal for reporting and tracking local issues across Kenya. Citizens can submit reports with a location and optional photo, follow case progress, and receive notifications. Administrators can review reports, update their status, and send citizens an update.

## Features

- Citizen registration and login
- Service requests for streetlights, water supply, garbage collection, road damage, and other issues
- County and sub-county location selection, plus a specific location description
- Optional image attachment
- Citizen request list and individual request details
- Status tracking: Pending, In Progress, and Resolved
- Citizen and administrator notifications with unread counts
- Admin request queue, request detail and status updates, citizens list, and open/resolved totals
- Role-based admin access

## Technology

- Laravel 13 and PHP 8.3+
- React 19, TypeScript, Inertia.js, and Vite+
- Plain CSS in `resources/css/app.css`, bundled with Vite
- Aiven MySQL for the shared deployment database; local development can use SQLite

## Requirements

- PHP 8.3 or newer with the extensions required by Laravel
- Composer
- Node.js 22.12+ (or 20.19+) and npm
- A database; the sample environment targets the Aiven MySQL service

## Local setup

Run these commands from the project directory. The sample environment targets Aiven MySQL. Add its password to `.env` before migrating, or set `DB_CONNECTION=sqlite` and create `database/database.sqlite` for a separate local database.

### Windows PowerShell

```powershell
composer install
Copy-Item .env.example .env
php artisan key:generate
php artisan migrate
php artisan storage:link
npm install
```

If `.env` already exists, keep it and skip `Copy-Item`. Set `DB_PASSWORD` in `.env` before running migrations. For SQLite, set `DB_CONNECTION=sqlite` and create `database/database.sqlite` first.

Set a useful local app name in `.env` if desired:

```dotenv
APP_NAME="Sauti Yako"
APP_URL=http://127.0.0.1:8000
```


### macOS / Linux

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan storage:link
npm install
```

If `.env` already exists, keep it and skip the copy command.

## Start the app

Run the Laravel server and Vite development server in separate terminals:

```bash
php artisan serve
```

```bash
npm run dev
```

Open [http://127.0.0.1:8000](http://127.0.0.1:8000). In a Herd environment, you can use the configured Herd site instead of `php artisan serve`; keep `npm run dev` running while developing.

For a production frontend build, run:

```bash
npm run build
```

## Create an administrator

1. Register a normal account from the portal.
2. Promote that account using its login email:

```bash
php artisan user:make-admin admin@example.com
```

3. Sign in with that account. Successful login redirects to `/dashboard`, which sends administrators to `/admin` and citizens to `/citizen`.

The command only promotes an existing user. It does not create an account or change the account password.

## Useful commands

```bash
php artisan migrate                 # Apply database migrations
php artisan migrate:status          # Show migration status
php artisan user:make-admin EMAIL   # Grant admin access to an existing account
npm run check                       # Run frontend lint/format checks
npm run types:check                 # Check TypeScript types
```

Run `php artisan test` to execute the Laravel test suite.

## Deploy to Vercel

The project includes a PHP function entrypoint and Vercel routing configuration. Vercel uses the community `vercel-php` runtime for PHP applications; the runtime runs the Composer `vercel` script to build the Vite assets. The Vercel config disables frontend framework auto-detection because Wayfinder needs PHP during the asset build. The function entrypoint puts Laravel's writable runtime files in `/tmp`.

1. Push the project to a Git provider supported by Vercel and import it as a Vercel project.
2. Add these environment variables in **Project Settings → Environment Variables**. Set appropriate Preview and Production scopes, and keep secrets out of Git.

   ```dotenv
   APP_NAME="Sauti Yako"
   APP_ENV=production
   APP_DEBUG=false
   APP_URL=https://YOUR-VERCEL-DOMAIN
   APP_KEY=base64:GENERATE_A_KEY_LOCALLY
   DB_CONNECTION=mysql
   DB_HOST=mysql-2c8c6cc6-kamauwamkuu-6f6e.h.aivencloud.com
   DB_PORT=20924
   DB_DATABASE=defaultdb
   DB_USERNAME=avnadmin
   DB_PASSWORD=SET_THIS_IN_VERCEL
   CACHE_STORE=database
   SESSION_DRIVER=database
   QUEUE_CONNECTION=sync
   LOG_CHANNEL=stderr
   ```

3. Generate the application key locally with `php artisan key:generate --show`, then add the displayed value as `APP_KEY` in Vercel. Do not commit it.
4. Download the MySQL CA certificate from the Aiven service's **Overview → Connection information** page. Add its PEM content in Vercel as `MYSQL_ATTR_SSL_CA_CONTENT`. The Vercel entrypoint writes it to `/tmp` and configures Laravel's MySQL TLS CA option. For local development, set `MYSQL_ATTR_SSL_CA` to the downloaded certificate's full path.
5. Configure `.env` locally with the same Aiven connection values and CA certificate, then run `php artisan migrate --force` once to create the schema. Confirm you are using the intended Aiven service before running migrations.
6. Deploy a preview first, confirm sign-in and request creation, then promote it to production.

The screenshot does not reveal the database password. Add it directly to Vercel and your private local `.env`. The PHP runtime is community-maintained rather than one of Vercel's official runtimes; see [Vercel's runtime list](https://vercel.com/docs/functions/runtimes) and the [PHP runtime project](https://github.com/vercel-community/php) for current details.

### Persistent uploads

The database persists requests and notifications. Uploaded photos currently use Laravel's local public disk. Vercel Functions have a read-only deployment filesystem and temporary `/tmp` storage, so local-disk photo uploads are not durable across invocations. Configure persistent object storage (such as S3-compatible storage) before accepting real photo attachments in production. Image storage credentials are separate from the Aiven database.

## Project structure

```text
app/Http/Controllers/       Citizen, admin, and notification actions
app/Http/Middleware/        Admin access control
app/Models/                 Users, service requests, and portal notifications
config/kenyan_locations.php County and sub-county options
database/migrations/        Database schema
resources/js/pages/citizen/ Citizen portal pages
resources/js/pages/admin/   Admin portal pages
routes/web.php              Authenticated web routes
```

## Request access rules

- Citizen request detail routes only return a request owned by the signed-in citizen. Requests owned by another account return 404.
- Admin routes use the `admin` middleware and require the account to have administrator access.
- Uploaded request images are stored on Laravel's public disk. `php artisan storage:link` makes them available to the browser.
