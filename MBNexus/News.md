# News

## 22th November 2017

Fairly long hiatus. Still occasionally working on the googlesheet and learning more things that will allow me to create an app for this, such as json, flask, and SQL, but this remains to be such a huge project that migrating it away from googlesheet would require too much time on my own.

## 22th August 2016:

I'm still establishing the infrastructure I want to work with for the entire application:
<p>

<details><summary>The right SQL platform.</summary>
I've been learning SQLalchemy, but realized that SQLalchemy doesn't have native support for arrays of string that
the more established and complex tools like postgreSQL offers. This has led me to download it and learn it further.
I finally finished the full setup and it's ready to take the commands of my user. Next is building the proper schema.
</details><br/>

## 10th July 2016:

Since there is a new expansion, I decided to lighten up the old sheets by creating copies of them and only using the new Stormblood material and crafts. A few changes have been done:
<p>
<details><summary>Removed Crystal columns...</summary>
to make space as the price of crystals tend to be negligable for sheet maintenance at this point in time. Future builds I'm working on is looking to simply set the prices on a db sheet. Column may be brought back at some point if I don't find a better work-around that spacing issue.
</details><br/>

<details><summary>Added Q (quantity) column left of material cells and removed quantities from material cell...</summary>
I was using a terrible 27 recursive substitutes to squeeze both a word value of the material and the quantity to save space, but this came with a lot of bugs. It worked while it lasted, but I've seperated the cells so they can be manipulated better and it was a lot of unnecessary strain on memory.
</details><br/>

<details><summary>Currently seeing if I can have one database sheet for basic crafts (lumber, ingots, threads, etc)...</summary>
I want to see if I can keep the sheets consistent given material exist in many different cells throughout. When prices are updated on that sheet, all other sheets that ref to an item will auto-populate from the vlookup address.
</details><br/>

<details><summary>Reading up about sqlalchemy to use with python...</summary>
Seeing what would be required to run an actual database. Seeing as well how I can perhaps plug the sheets into the database so that folks that don't know how to program things, will still be able to contribute by filling in the data in the sheets.
</details><br/>

<details><summary>Added HQ columns as default to all sheets</summary>
By making space with the crystal column, it allowed me to fit that in.
</details><br/>

## 29th Jan 2016:

Hi, guys. This should be my first project (and perhaps too big) but it will help me learn more about coding on the way, and
if it allows others to get inspired and continue the vision, then the community is the winner from this.

Alright, so I'm a market board moogle, and I spend a lot of time buying, crafting, and selling. I also come from WoW, so I'm used to having
access to a lot of addons that help me do all those things or cut corners, or external websites like _The Undermine Journal_, that allow users to get auction house info outside of 
WoW client through the game's API. FF14 stated that they don't want the same thing, and don't want any addon interacting with the client or
any of its files, as a respectable choice given their vision. I want to work on a program that would be standalone but would still give information and keep personal information
all well organized by the user. I currently use papers, wordpad, and a custom googlesheet I put together, but would rather a framework to be able to make 
money faster and get the data I want faster all in one.

  * I want to reduce having to Search google item XY for components.
  * I want to see ALL the components involved in compact, but extended display. This may be difficult, but config could be controlled to 
  limits.
  * Keeping notes, and favoriting items for buy list.
  * If Item right clicked, will show own page and every craft involved and important information on item. (or rc show's own component)
  * If Item left clicked, item's name will go to clipboard, so you can paste in FF14 to buy or search.
  * Items of preference will allow users to input current prices and build database over time.
  * I want to see if it's possible to have secured accounts. Very limited, except for the data on personal prices, which enriches database.
  * Customizable for personal needs -- recognizes trends. Unlikely to come with the core.
  * Color displayed items of crafting priority based on past trends. Identify profitable markets.
  * Module for timed spawns: Fishing, Miner, Botanists.
  * Timer set on AZ timer to keep track.
  * More to come...  


