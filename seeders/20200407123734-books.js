"use strict";

const Books = require("../models").book;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const books = await Promise.all([
      Books.upsert({
        ISBN: "978-1644450000",
        name: "Milkman: A Novel",
        author: "Anna Burns",
        description:
          "In an unnamed city, middle sister stands out for the wrong reasons. She reads while walking, for one. And she has been taking French night classes downtown. So when a local paramilitary known as the milkman begins pursuing her, she suddenly becomes “interesting,” the last thing she ever wanted to be. Despite middle sister’s attempts to avoid him―and to keep her mother from finding out about her maybe-boyfriend―rumors spread and the threat of violence lingers. Milkman is a story of the way inaction can have enormous repercussions, in a time when the wrong flag, wrong religion, or even a sunset can be subversive. Told with ferocious energy and sly, wicked humor, Milkman establishes Anna Burns as one of the most consequential voices of our day.",
        price: "7.99",
        imageUrl: "https://m.media-amazon.com/images/I/51IsK7yvamL._SY346_.jpg",
        price_percentage: 100,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Books.upsert({
        ISBN: "978-0143132509",
        name:
          "Directorate S: The C.I.A. and America's Secret Wars in Afghanistan and Pakistan",
        author: "Steve Coll",
        description:
          "Prior to 9/11, the United States had been carrying out small-scale covert operations in Afghanistan, ostensibly in cooperation.",
        price: "11.19",
        imageUrl: "https://m.media-amazon.com/images/I/41eUFUanwxL.jpg",
        price_percentage: 100,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Books.upsert({
        ISBN: "978-1476796628",
        name: "Belonging: A German Reckons with History and Home",
        author: "Nora Krug",
        description:
          "In an unnamed city, middle sister stands out for the wrong reasons. She reads while walking, for one. And she has been taking French night classes downtown. So when a local paramilitary known as the milkman begins pursuing her, she suddenly becomes “interesting,” the last thing she ever wanted to be. Despite middle sister’s attempts to avoid him―and to keep her mother from finding out about her maybe-boyfriend―rumors spread and the threat of violence lingers. Milkman is a story of the way inaction can have enormous repercussions, in a time when the wrong flag, wrong religion, or even a sunset can be subversive. Told with ferocious energy and sly, wicked humor, Milkman establishes Anna Burns as one of the most consequential voices of our day.",
        price: "19.29",
        imageUrl: "https://m.media-amazon.com/images/I/51nkh9-lIeL.jpg",
        price_percentage: 100,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Books.upsert({
        ISBN: "978-1627793063",
        name: "Flash: The Making of Weegee the Famous ",
        author: "Christpoher Bonanos",
        description: `Arthur Fellig’s ability to arrive at a crime scene just as the cops did was so uncanny that he renamed himself “Weegee,” claiming that he functioned as a human Ouija board. Weegee documented better than any other photographer the crime, grit, and complex humanity of midcentury New York City. In Flash, we get a portrait not only of the man (both flawed and deeply talented, with generous appetites for publicity, women, and hot pastrami) but also of the fascinating time and place that he occupied.

        From self-taught immigrant kid to newshound to art-world darling to latter-day caricature―moving from the dangerous streets of New York City to the celebrity culture of Los Angeles and then to Europe for a quixotic late phase of experimental photography and filmmaking―Weegee lived a life just as worthy of documentation as the scenes he captured. With Flash, we have an unprecedented and ultimately moving view of the man now regarded as an innovator and a pioneer, an artist as well as a newsman, whose photographs are among most powerful images of urban existence ever made.`,
        price: "15.79",
        imageUrl: "https://m.media-amazon.com/images/I/51nkh9-lIeL.jpg",
        price_percentage: 100,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Books.upsert({
        ISBN: "978-1594206252",
        name: "Feel Free: Essays",
        author: "Zadie Smith",
        description: `Since she burst spectacularly into view with her debut novel almost two decades ago, Zadie Smith has established herself not just as one of the world's preeminent fiction writers, but also a brilliant and singular essayist. She contributes regularly to The New Yorker and the New York Review of Books on a range of subjects, and each piece of hers is a literary event in its own right.
    
        Arranged into five sections--In the World, In the Audience, In the Gallery, On the Bookshelf, and Feel Free--this new collection poses questions we immediately recognize. What is The Social Network--and Facebook itself--really about? "It's a cruel portrait of us: 500 million sentient people entrapped in the recent careless thoughts of a Harvard sophomore." Why do we love libraries? "Well-run libraries are filled with people because what a good library offers cannot be easily found elsewhere: an indoor public space in which you do not have to buy anything in order to stay." What will we tell our granddaughters about our collective failure to address global warming? "So I might say to her, look: the thing you have to appreciate is that we'd just been through a century of relativism and deconstruction, in which we were informed that most of our fondest-held principles were either uncertain or simple wishful thinking, and in many areas of our lives we had already been asked to accept that nothing is essential and everything changes--and this had taken the fight out of us somewhat."
        
        Gathering in one place for the first time previously unpublished work, as well as already classic essays, such as, "Joy," and, "Find Your Beach," Feel Free offers a survey of important recent events in culture and politics, as well as Smith's own life. Equally at home in the world of good books and bad politics, Brooklyn-born rappers and the work of Swiss novelists, she is by turns wry, heartfelt, indignant, and incisive--and never any less than perfect company. This is literary journalism at its zenith.`,
        price: "16.19",
        imageUrl: "./images/feel.jpg",
        price_percentage: 100,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Books.upsert({
        ISBN: "978-1594283729",
        name: "The Carrying: Poems",
        author: "Limon Ada",
        price: "18.71",
        imageUrl: "./images/carrying.jpg",
        price_percentage: 100,
        categoryId: 3,
        description: `Vulnerable, tender, acute, these are serious poems, brave poems, exploring with honesty the ambiguous moment between the rapture of youth and the grace of acceptance. A daughter tends to aging parents. A woman struggles with infertility—“What if, instead of carrying / a child, I am supposed to carry grief?”—and a body seized by pain and vertigo as well as ecstasy. A nation convulses: “Every song of this country / has an unsung third stanza, something brutal.” And still Limón shows us, as ever, the persistence of hunger, love, and joy, the dizzying fullness of our too-short lives. “Fine then, / I’ll take it,” she writes. “I’ll take it all.”
    
    In Bright Dead Things, Limón showed us a heart “giant with power, heavy with blood”—“the huge beating genius machine / that thinks, no, it knows, / it’s going to come in first.” In her follow-up collection, that heart is on full display—even as The Carrying continues further and deeper into the bloodstream, following the hard-won truth of what it means to live in an imperfect world.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Books.upsert({
        ISBN: "978-0525520375",
        name: "There There: A novel",
        author: "Tommy Orange",
        price: "10.27",
        imageUrl: "./images/there.jpg",
        price_percentage: 100,
        categoryId: 1,
        description: `Tommy Orange’s “groundbreaking, extraordinary” (The New York Times) There There is the “brilliant, propulsive” (People Magazine) story of twelve unforgettable characters, Urban Indians living in Oakland, California, who converge and collide on one fateful day. It’s “the year’s most galvanizing debut novel” (Entertainment Weekly).
     
    As we learn the reasons that each person is attending the Big Oakland Powwow—some generous, some fearful, some joyful, some violent—momentum builds toward a shocking yet inevitable conclusion that changes everything. Jacquie Red Feather is newly sober and trying to make it back to the family she left behind in shame. Dene Oxendene is pulling his life back together after his uncle’s death and has come to work at the powwow to honor his uncle’s memory. Opal Viola Victoria Bear Shield has come to watch her nephew Orvil, who has taught himself traditional Indian dance through YouTube videos and will to perform in public for the very first time. There will be glorious communion, and a spectacle of sacred tradition and pageantry. And there will be sacrifice, and heroism, and loss.
     
    There There is a wondrous and shattering portrait of an America few of us have ever seen. It’s “masterful . . . white-hot . . . devastating” (The Washington Post) at the same time as it is fierce, funny, suspenseful, thoroughly modern, and impossible to put down. Here is a voice we have never heard—a voice full of poetry and rage, exploding onto the page with urgency and force. Tommy Orange has written a stunning novel that grapples with a complex and painful history, with an inheritance of beauty and profound spirituality, and with a plague of addiction, abuse, and suicide. This is the book that everyone is talking about right now, and it’s destined to be a classic.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Books.upsert({
        ISBN: "978-0393356687",
        name: "The Overstory: A Novel",
        author: "Richard Powers",
        price: "11.39",
        imageUrl: "./images/overstory.jpg",
        price_percentage: 100,
        categoryId: 1,

        description: `"The best novel ever written about trees, and really just one of the best novels, period." ―Ann Patchett
    
    The Overstory, winner of the 2019 Pulitzer Prize in Fiction, is a sweeping, impassioned work of activism and resistance that is also a stunning evocation of―and paean to―the natural world. From the roots to the crown and back to the seeds, Richard Powers’s twelfth novel unfolds in concentric rings of interlocking fables that range from antebellum New York to the late twentieth-century Timber Wars of the Pacific Northwest and beyond. There is a world alongside ours―vast, slow, interconnected, resourceful, magnificently inventive, and almost invisible to us. This is the story of a handful of people who learn how to see that world and who are drawn up into its unfolding catastrophe.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Books.upsert({
        ISBN: "978-1559369527",
        name: "Fairview",
        author: "Jackie Sibblies Drury",
        price: "11.67",
        imageUrl: "./images/fairview.jpg",
        price_percentage: 100,
        categoryId: 1,
        description: `“Dazzling and ruthless…One of the most exquisitely and systematically arranged ambushes of an unsuspecting audience in years…A glorious, scary reminder of the unmatched power of live theater to rattle, roil and shake us wide awake.” —Ben Brantley, New York Times
    
    Grandma’s birthday approaches. Beverly is organizing the perfect dinner, but everything seems doomed from the start: the silverware is all wrong, the carrots need chopping and the radio is on the fritz. What at first appears to be a family comedy takes a sharp, sly turn into a startling examination of deep-seated paradigms about race in America.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Books.upsert({
        ISBN: "978-0195089578",
        name: "The New Negro: The Life of Alain Locke",
        author: "Jeffrey C. Stewart",
        price: "27.88",
        imageUrl: "./images/new.jpg",
        price_percentage: 100,
        categoryId: 7,
        description: `A tiny, fastidiously dressed man emerged from Black Philadelphia around the turn of the century to mentor a generation of young artists including Langston Hughes, Zora Neale Hurston, and Jacob Lawrence and call them the New Negro -- the creative African Americans whose art, literature, music, and drama would inspire Black people to greatness.
    
    In The New Negro: The Life of Alain Locke, Jeffrey C. Stewart offers the definitive biography of the father of the Harlem Renaissance, based on the extant primary sources of his life and on interviews with those who knew him personally. He narrates the education of Locke, including his becoming the first African American Rhodes Scholar and earning a PhD in philosophy at Harvard University, and his long career as a professor at Howard University. Locke also received a cosmopolitan, aesthetic education through his travels in continental Europe, where he came to appreciate the beauty of art and experienced a freedom unknown to him in the United States. And yet he became most closely associated with the flowering of Black culture in Jazz Age America and his promotion of the literary and artistic work of African Americans as the quintessential creations of American modernism. In the process he looked to Africa to find the proud and beautiful roots of the race. Shifting the discussion of race from politics and economics to the arts, he helped establish the idea that Black urban communities could be crucibles of creativity. Stewart explores both Locke's professional and private life, including his relationships with his mother, his friends, and his white patrons, as well as his lifelong search for love as a gay man.
    
    Stewart's thought-provoking biography recreates the worlds of this illustrious, enigmatic man who, in promoting the cultural heritage of Black people, became -- in the process -- a New Negro himself.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Books.upsert({
        ISBN: "978-0811226059",
        name: "Be With",
        author: "Forrest Gander",
        price: "10.99",
        imageUrl: "./images/be.jpg",
        price_percentage: 100,
        categoryId: 3,
        description: `Forrest Gander’s first book of poems since his Pulitzer finalist Core Samples from the World: a startling look through loss, grief, and regret into the exquisite nature of intimacy
    
    Drawing from his experience as a translator, Forrest Gander includes in the first, powerfully elegiac section a version of a poem by the Spanish mystical poet St. John of the Cross. He continues with a long multilingual poem examining the syncretic geological and cultural history of the U.S. border with Mexico. The poems of the third section―a moving transcription of Gander’s efforts to address his mother dying of Alzheimer’s―rise from the page like hymns, transforming slowly from reverence to revelation. Gander has been called one of our most formally restless poets, and these new poems express a characteristically tensile energy and, as one critic noted, “the most eclectic diction since Hart Crane.”`,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Books.upsert({
        ISBN: "978-1250215079",
        name: "Amity and Prosperity: One Family and the Fracturing of America",
        author: "Eliza Griswold",
        price: "11.39",
        imageUrl: "./images/amity.jpg",
        price_percentage: 100,
        categoryId: 3,
        description: `In Amity and Prosperity, the prizewinning poet and journalist Eliza Griswold tells the story of the energy boom’s impact on a small town at the edge of Appalachia and one woman’s transformation from a struggling single parent to an unlikely activist.
    
    Stacey Haney is a local nurse working hard to raise two kids and keep up her small farm when the fracking boom comes to her hometown of Amity, Pennsylvania. Intrigued by reports of lucrative natural gas leases in her neighbors’ mailboxes, she strikes a deal with a Texas-based energy company. Soon trucks begin rumbling past her small farm, a fenced-off drill site rises on an adjacent hilltop, and domestic animals and pets start to die. When mysterious sicknesses begin to afflict her children, she appeals to the company for help. Its representatives insist that nothing is wrong.
    
    Alarmed by her children’s illnesses, Haney joins with neighbors and a committed husband-and-wife legal team to investigate what’s really in the water and air. Against local opposition, Haney and her allies doggedly pursue their case in court and begin to expose the damage that’s being done to the land her family has lived on for centuries. Soon a community that has long been suspicious of outsiders faces wrenching new questions about who is responsible for their fate, and for redressing it: The faceless corporations that are poisoning the land? The environmentalists who fail to see their economic distress? A federal government that is mandated to protect but fails on the job? Drawing on seven years of immersive reporting, Griswold reveals what happens when an imperiled town faces a crisis of values, and a family wagers everything on an improbable quest for justice.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Books.upsert({
        ISBN: "978-1743794135",
        name: "SUQAR: Desserts & Sweets from the Modern Middle East",
        author: "Greg Malouf",
        price: "27.19",
        imageUrl: "./images/suqar.jpg",
        price_percentage: 100,
        categoryId: 5,
        description: `SUQAR (which means 'sugar' in Arabic) shares the secrets of more than 100 sweet treats inspired by Middle Eastern flavors – ranging from puddings and pastries, to ice creams, cookies, cakes, confectionary, fruity desserts and drinks.
    
    The traditional time to eat sweets in the Middle East is not after meals (when fruit is served) but at breakfast, with coffee in between meals or on religious holidays and special occasions. The repertoire of these dishes is vast and varied. In SUQAR, acclaimed chef Greg Malouf and writing partner Lucy Malouf share the best and most delectable sweet treats from the region (alongside some personal favorites and tried-and-tested creations from Greg's restaurant kitchens). The recipes merge the spices, flavors and scents of Greg's childhood with the influence of Greg's training in the West to create dishes in Greg's signature Modern Middle Eastern style.
    
    The book's ten chapters cover: Fruit; Dairy; Frozen; Cakes; Cookies; Pastries; Doughnuts, Fritters & Pancakes; Halvas & Confectionery; Preserves; and Drinks. Accompanied by beautiful photography and illustrations, SUQAR is a journey through the sweets of the Middle East.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Books.upsert({
        ISBN: "978-0520290686",
        name:
          "Canned: The Rise and Fall of Consumer Confidence in the American Food Industry (Volume 68) (California Studies in Food and Culture)",
        author: "Anna Zeide",
        price: "23.64",
        imageUrl: "./images/canned.jpg",
        price_percentage: 100,
        categoryId: 6,
        description: `2019 James Beard Foundation Book Award winner: Reference, History, and Scholarship
    
    A century and a half ago, when the food industry was first taking root, few consumers trusted packaged foods. Americans had just begun to shift away from eating foods that they grew themselves or purchased from neighbors. With the advent of canning, consumers were introduced to foods produced by unknown hands and packed in corrodible metal that seemed to defy the laws of nature by resisting decay.
     
    Since that unpromising beginning, the American food supply has undergone a revolution, moving away from a system based on fresh, locally grown goods to one dominated by packaged foods. How did this come to be? How did we learn to trust that food preserved within an opaque can was safe and desirable to eat? Anna Zeide reveals the answers through the story of the canning industry, taking us on a journey to understand how food industry leaders leveraged the powers of science, marketing, and politics to win over a reluctant public, even as consumers resisted at every turn.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Books.upsert({
        ISBN: "978-1787131187",
        name: "Goat: Cooking and Eating",
        author: "James Whetlor",
        price: "18.99",
        imageUrl: "./images/goat.jpg",
        price_percentage: 100,
        categoryId: 5,
        description: `We should all be eating more goat. It's sustainable, ethical, highly nutritious and low in calories. Why then does it remain so underused and misunderstood? This book tells the story of how food and farming culture developed in the west without the help of this staple of global agriculture, and showcases the best recipes from around the world using this fabulous beast. Utterly delicious cooked fast and lean or slow-cooked in curries, stews, braises and roasts, from kebabs to stir-fries to sausages, goat is the one meat we should all be eating more often. With 100 dishes created by Cabrito's founder James Whetlor, plus a foreword by Hugh Fearnley-Whittingstall, and guest recipes from world-renowned chefs including Yotam Ottolenghi, Gill Meller, Neil Rankin and Jeremy Lee, Goat is a ground-breaking, bold cookbook.
    
    Essential reading for anyone with even a passing interest in food and the way we eat today, and set to be the definitive guide on the subject for years to come, Goat is a genre-defining book.
    
    50% of the royalties from the book will be donated to Farm Africa.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Books.upsert({
        ISBN: "978-0316437318",
        name:
          "Milk Street: Tuesday Nights: More than 200 Simple Weeknight Suppers that Deliver Bold Flavor, Fast",
        author: "Christopher Kimball",
        price: "23.19",
        imageUrl: "./images/milk.jpg",
        price_percentage: 100,
        categoryId: 5,
        description: `At Christopher Kimball's Milk Street, Tuesdays are the new Saturdays. That means every Tuesday Nights recipe delivers big, bold flavors, but the cooking is quick and easy--simple enough for the middle of the week.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Books.upsert({
        ISBN: "978-0451494948",
        name:
          "Eat a Little Better: Great Flavor, Good Health, Better World: A Cookbook",
        author: "Sam Kass",
        price: "18.49",
        imageUrl: "./images/eat.jpg",
        price_percentage: 100,
        categoryId: 5,
        description: `This book lays out Kass's plan to eat a little better. Knowing that sustainability and healthfulness come most, well, sustainably when new habits and choices seem appealing rather than drastic and punitive, Kass shares his philosophy and methods to help make it easy to choose, cook, and eat delicious foods without depriving yourself of agency or pleasure. He knows that going organic, local, and so forth all the time is just not realistic for most people, and that's ok--it's all about choosing and doing a little better, and how those choices add up to big change. It's the philosophy he helped the Obamas instill in their home, both in Chicago and that big white one in Washington.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Books.upsert({
        ISBN: "978-0399579127",
        name:
          "Tokyo New Wave: 31 Chefs Defining Japan's Next Generation, with Recipes [A Cookbook]",
        author: "Andrea Fazzari",
        price: "26.98",
        imageUrl: "./images/tokyo.jpg",
        price_percentage: 100,
        categoryId: 5,
        description: `In a luxe collection filled with portraits, interviews, and recipes, author and photographer Andrea Fazzari explores the changing landscape of food in Tokyo, Japan. A young and charismatic generation is redefining what it means to be a chef in this celebrated food city. Open to the world and its influences, these chefs have traveled more than their predecessors, have lived abroad, speak other languages, and embrace social media. Yet they still remain distinctly Japanese, influenced by a style, tradition, and terroir to which they are inextricably linked. This combination of the old and the new is on display in Tokyo New Wave, a transporting cookbook and armchair travel guide that captures this moment in Japanese cuisine and brings it to a savvy global audience.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Books.upsert({
        ISBN: "978-1579659004",
        name:
          "Buttermilk Graffiti: A Chef's Journey to Discover America's New Melting-Pot Cuisine",
        author: "Edward Lee",
        price: "10.29",
        imageUrl: "./images/buttermilk.jpg",
        price_percentage: 100,
        categoryId: 5,
        description: `American food is the story of mash-ups. Immigrants arrive, cultures collide, and out of the push-pull come exciting new dishes and flavors. But for Edward Lee, who, like Anthony Bourdain or Gabrielle Hamilton, is as much a writer as he is a chef, that first surprising bite is just the beginning. What about the people behind the food? What about the traditions, the innovations, the memories?
    
    A natural-born storyteller, Lee decided to hit the road and spent two years uncovering fascinating narratives from every corner of the country. There’s a Cambodian couple in Lowell, Massachusetts, and their efforts to re-create the flavors of their lost country. A Uyghur café in New York’s Brighton Beach serves a noodle soup that seems so very familiar and yet so very exotic—one unexpected ingredient opens a window onto an entirely unique culture. A beignet from Café du Monde in New Orleans, as potent as Proust’s madeleine, inspires a narrative that tunnels through time, back to the first Creole cooks, then forward to a Korean rice-flour hoedduck and a beignet dusted with matcha.
    
    Sixteen adventures, sixteen vibrant new chapters in the great evolving story of American cuisine. And forty recipes, created by Lee, that bring these new dishes into our own kitchens.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("books", null, {});
  },
};
