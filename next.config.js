/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {

    //Theo mentions this is a great idea
    //bc we can add CI later on to check this
    //but he's annoyed by the fact that deployment is blocked
    //but I think it's safter to have this turned off
    // eslint: {
    //     ignoreDuringBuilds: true,
    // },
    // typescript: {
    //     ignoreBuildErrors: true,
    // }
};

export default config;
