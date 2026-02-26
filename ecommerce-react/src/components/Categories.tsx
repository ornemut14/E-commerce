import necklace from "../assets/necklace.jpg";
import ring from "../assets/ring.jpg";
import earrings from "../assets/earrings.jpg";

function Categories() {
  return (
    <section className="categories">
      <div
        className="category-card"
        style={{ backgroundImage: `url(${necklace})` }}
      >
        Necklace
      </div>

      <div
        className="category-card"
        style={{ backgroundImage: `url(${earrings})` }}
      >
        Earrings
      </div>

      <div
        className="category-card"
        style={{ backgroundImage: `url(${ring})` }}
      >
        Rings
      </div>
    </section>
  );
}

export default Categories;