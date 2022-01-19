---
title: Enjoy making DAPPs using SvelteWeb3
slug: enjoy-making-dapps-using-svelteweb3
date: 14-Nov-2021
description: "Learn how to make dapps using SvelteWeb3 and enjoy making them"
---

My web3 experience started from Svelte but because I didn’t know how to use the window[‘ethereum’] global had to move to React so I could use the web3-react library. I got tired of writing useEffect() so I taught how hard will be to make a library like web3-react but for svelte. It wasn’t exactly that hard, I don’t know why no one did it before me.

SvelteWeb3 is an adapter for web3-react connectors, at first I wanted to make my own connectors but after some thinking I realized that would be useless and it would add more dependencies.

Some templates or examples:

[sveltekit-svelteweb3](https://github.com/chiuzon/sveltekit-svelteweb3)

[svelte-vite-svelteweb3](https://github.com/chiuzon/svelte-vite-svelteweb3)

In the vite example you can see that the initialization isn’t done using the Web3Wrapper component and instead is done using the initSvelteWeb3(fetchLibrary) function. Apparently in svelte spa alone some components don’t pass props correctly. I’m not sure why this is happening. Maybe because SvelteWeb3 is done using sveltekit package. When calling initSvelteWeb3 you need to be sure that you call it at the top, svelteWeb3 uses svelte stores so doesn’t have an context api like with react but it sets the fetchlibrary function that is used to get your library (web3js or ethers.js).

When using svelteKit you can use Web3Wrapper or initSvelteWeb3.

⚠️ Because of some dependecies problems the address that you receive from the $account store isn’t checksumed, you can use ethers.utils.getAddress($account) to receive a checksumed address where you want.

Accessing svelteWeb3 is done by using svelteWeb3() function, you can destructure the function return.

Activating an connector can be done like this:
![code image](https://miro.medium.com/max/700/1*2zOUijd5LrNP6NPtkovQVw.png)

You can use the $error store to show the current error message.

svelteWeb3 should support all of web3-react connectors, but at this moment I tested injectedConnector and walletConnectConnector. You can use the abstractConnector to make your own connector.

[svelteWeb3 github repository](https://github.com/chiuzon/svelteWeb3)