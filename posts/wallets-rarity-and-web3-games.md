---
title: Wallets, Rarity and Web3 Games
slug: wallets-rarity-and-web3-games
date: 15-Jan-2022
description: "When I started working at rarity.plus I hit one of the biggest problems and some of them stopped me from continuing working on rarity plus, wallet and game engines."
---

When I started working at rarity.plus I hit one of the biggest problems and some of them stopped me from continuing working on rarity plus, wallet and game engines.

![image rarityplus](https://miro.medium.com/max/700/1*NpO-hl24EZyuzrck_yi9bA.png)

If you try to make web3 games you kinda have one choice, make the game in browser and use Metamask to auth, doing games in browser never was a good development experience, you either need to build your shit from scratch, use some half asset solution or get shitty performances because it runs on a browser.

In my case I tried to use BabylonJS, was ok until you started needing more complex things or you hit some weird errors. And of course you need to build your own world management system, animation management system so what are we doing here ? building games or building frameworks for games or game engine on top of game engines. You can’t go to production with a system like this, it will become shitty and it will bring more problems.

### Wallets

So I was thinking why not make the game native , open source and integrate an custom wallet in it? We could use Godot and integrate a limited wallet in it. It could work. You solve the game engine problem, this way. Actually no. Because people don’t understand that they can have multiple wallets and they think you want their private key so you can steal their valueless monke jpgs.

People don’t understand that you can generate a wallet just for the game and use that one to play the game, move a limited of value to pay the gas fees and nothing bad would happen. This would improve the UX for the client and for the developer by a lot. If you are scared that someone will steal your jpegs you can compile the source code and play that and again nothing bad will happen.

### My biggest mistake

![image with tweet](https://miro.medium.com/max/583/1*4JMFj7DI3feQFCzVOE4p9A.png)

In this image you can see my biggest mistake and I’m sorry for it. I asked anons for opinions. In Web3 the consensus when building a product is to ask for the community opinion on it, it some cases it might be good in another it might be bad. The community is mixed in minds and skills, when you ask for their opinion is a big chance that they don’t understand what they are talking about.

Anyway I have in mind to go back at building rarity.plus but this time without listening to anons opinions and using a good game engine.

END OF RANT
