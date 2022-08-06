/** Connect to Moralis server */
const serverUrl = "https://3oa9fiq65tsf.usemoralis.com:2053/server";
const appId = "LyRGmHA5fdpucYf6RRXR2s8uB5Kl4sILd2G0GP9y";

declare const Moralis: any;

Moralis.start({ serverUrl, appId });

export function isLogged() {
    let user = Moralis.User.current();
    if (!user) return false

    return true;
}

/** Add from here down */
export async function login() {
    let user = Moralis.User.current();
    if (!user) {
        try {
            user = await (Moralis as any).authenticate({
                signingMessage: "Welcome to Dynamic NFTs !",
            })

            console.log(user)
            console.log(user.get('ethAddress'))
            return user;
        } catch (error) {
            console.log(error)
        }
    }
}

export async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
}
