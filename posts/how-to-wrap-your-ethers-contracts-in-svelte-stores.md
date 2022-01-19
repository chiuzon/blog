---
title: How to wrap your ethers contracts in svelte stores.
slug: how-to-wrap-your-ethers-contracts-in-svelte-stores
date: 25-Nov-2021
description: "This week I tried to find the best way to interact with ethers contract. I think I kinda find the sweet spot."
---

This week I tried to find the best way to interact with ethers contract. I think I kinda find the sweet spot.

For instancing I found that derived stores are the best, in theory your store is going to subscribe to your provider store and when the provider updates the contract is going to be re instanced with the signer instead of the json provider, if you don’t need to login with Metamask you can use just an json provider. It can look like this:

![code image with store](https://miro.medium.com/max/700/1*ppm_GhsR8CovxaaLKgkRQQ.png)

You can define a generic store that takes an address and an ABI, from my experience is best to check for address, provider and ABI if they are valid.

![code image with store](https://miro.medium.com/max/700/1*4mCH6hY1LFXq_a6Zzmmgqw.png)

Below is the fun part, balanceOf is wrapped inside a function because it requires an input:

![code image](https://miro.medium.com/max/700/1*pHN5_jjZs4kk8mMWYoNCDw.png)

Using them is pretty straight forward. You need to use $: for them to react, you could technically use writable stores but I didn’t tried.

![code image](https://miro.medium.com/max/700/1*VT5XazIsuELLfDLJAz6Fug.png)

In conclusion interacting with contracts deployed on EVM networks from Svelte isn’t hard and is more elegant than react hooks.

![funny image](https://miro.medium.com/max/498/1*An4pzsN8bgInIAnwEf46Vw.gif)