<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;

class GrantAdminAccess extends Command
{
    protected $signature = 'user:make-admin {email : Email address of the account to promote}';

    protected $description = 'Grant administrator access to an existing user account';

    public function handle(): int
    {
        $user = User::where('email', $this->argument('email'))->first();

        if (! $user) {
            $this->error('No user account was found with that email address.');
            return self::FAILURE;
        }

        $user->forceFill(['is_admin' => true])->save();
        $this->info("Administrator access granted to {$user->email}.");

        return self::SUCCESS;
    }
}
