const Banner = () => {
  return (
    <div>
      <div className="bg-gray-300">
        {/* section banner */}
        <section>
          <p className="text-gray-800 text-2xl font-bold">
            Explore your <span className="text-blue-500">hobby</span> or{" "}
            <span className="text-purple-500">passion</span>
          </p>
          <p className="text-gray-800 lg:w-5/12 text-start">
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities…
          </p>
          <p className="text-gray-800 lg:w-5/12 text-start">
            If you are an expert or a seller, you can Add your Listing and
            promote yourself, your students, products, services or events. Hop
            on your hobbyhorse and enjoy the ride.
          </p>
        </section>

        {/* section login oand join */}

        <section></section>
      </div>
    </div>
  );
};

export default Banner;
