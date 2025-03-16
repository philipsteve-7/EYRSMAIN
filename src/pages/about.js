import React from 'react';

const About = () => {
  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
      Welcome to Happily Cooking! We’re a community of food lovers passionate about exploring and sharing new recipes.
       Whether you’re an experienced chef or just enjoy cooking at home, our platform lets you create, save, 
       and share your favorite recipes with others.
      </p>
      <p>
      Here, you’ll discover a wide range of recipes, from healthy dishes to indulgent treats, 
      and have the opportunity to share your own culinary creations. Our goal is to build a vibrant, 
      supportive community that inspires each other to cook, taste, and enjoy delicious food together.
      </p>
      
      <h3>Contact Us</h3>
      <p>If you have any questions or need assistance, feel free to reach out to us:</p>
      
      <div className="contact-info">
        <p>Email: <a href="mailto:support@recipeshare.com">support@happilycooking.com</a></p>
        <p>Phone: <a href="tel:+1234567890">+91 70923 49987</a></p>
      </div>

      <h3>Share Your Recipe</h3>
      <p>
        Want to share your latest culinary creation? It's easy! Simply go to the 
        <a href="/create-recipe">"CREATE RECIPIE"</a> section, add your ingredients, 
        instructions, and a photo of your dish. Your recipe will be shared with the community, 
        and you can also save it to your personal collection.
      </p>
    </div>
  );
};

export default About;  // Ensure it's a default export
