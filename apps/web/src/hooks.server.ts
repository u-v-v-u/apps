import SvelteKitAuth from '@auth/sveltekit';
import Github from '@auth/core/providers/github';
import { GITHUB_ID, GITHUB_SECRET } from '$env/static/private';

export const handle = SvelteKitAuth({
  providers: [
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, turbo/no-undeclared-env-vars
    Github({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })
  ]
});
