export const loader = () => {
  setTimeout(() => {
    console.log('see skeletons')
  }, '3000')
  const receipt = [
    {
      id: 1,
      title: 'Spaghetti Carbonara',
      ingredients: ['Freshly ground black pepper', 'Salt'],
      instructions: [
        'Put a large saucepan of water on to boil.',
        'Fry the pancetta until golden and crisp.',
        'Beat the eggs in a bowl, then finely grate in the pecorino and parmesan.',
        'Add the pasta to the boiling water and cook following the instructions on the packet.',
        'Lift the pasta out of the water with a fork, saving some of the cooking water, and put it into the pancetta.',
        'Take the pan off the heat and quickly pour in the eggs and cheese.',
        'Toss everything together, adding more cooking water to keep it saucy.',
        'Serve immediately with extra grated cheese and black pepper.',
      ],
      imageURL: 'https://example.com/images/spaghetti-carbonara.jpg',
    },
    {
      id: 2,
      title: 'Classic Margherita Pizza',
      ingredients: [
        '1 pizza dough',
        '200g tomato sauce',
        '200g mozzarella cheese',
        'Fresh basil leaves',
        '2 tbsp olive oil',
        'Salt',
      ],
      instructions: [
        'Preheat the oven to 220°C.',
        'Roll out the dough on a floured surface.',
        'Spread the tomato sauce evenly over the dough.',
        'Tear the mozzarella into pieces and scatter over the pizza.',
        'Drizzle with olive oil and season with salt.',
        'Bake in the oven for 10-12 minutes, until the crust is golden and the cheese is bubbling.',
        'Remove from the oven and scatter fresh basil leaves over the pizza.',
        'Slice and serve immediately.',
      ],
      imageURL: 'https://example.com/images/margherita-pizza.jpg',
    },
    {
      id: 3,
      title: 'Chocolate Brownies',
      ingredients: [
        '200g dark chocolate',
        '175g unsalted butter',
        '325g caster sugar',
        '130g plain flour',
        '3 large eggs',
      ],
      instructions: [
        'Preheat the oven to 180°C and line a 20x30cm baking tin with parchment paper.',
        'Melt the chocolate and butter together in a heatproof bowl over a pan of simmering water.',
        'Remove from the heat and stir in the sugar.',
        'Add the eggs one at a time, mixing well after each addition.',
        'Fold in the flour until just combined.',
        'Pour the mixture into the prepared tin and bake for 25-30 minutes.',
        'Let the brownies cool in the tin before cutting into squares.',
      ],
      imageURL: 'https://example.com/images/chocolate-brownies.jpg',
    },
  ]
  return receipt
}
