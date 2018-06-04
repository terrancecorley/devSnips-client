import React from 'react';

export default function Homepage(props) {
  {/* Potential dynamic code for snips */}
  <li>
    <h2>My First Snip</h2>
    <textarea>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus excepturi, minima autem corporis repellat dolorum qui ipsum libero, facere animi doloribus. Labore, recusandae fugiat perspiciatis quas eius ad tempore culpa aliquam aspernatur quisquam! Dolores placeat cum quis sapiente blanditiis quia quibusdam voluptas tempora, sunt dolorem quidem eum, beatae dolor, aut nisi! Quasi possimus optio obcaecati. Laudantium consequatur distinctio libero eaque recusandae aliquam soluta tempore nam dolore temporibus a, exercitationem, facere reprehenderit nisi. Commodi nesciunt quisquam culpa, necessitatibus libero fugit sit non praesentium perspiciatis quo cum assumenda autem nam harum. Dolorem, neque doloremque vitae nisi quis consequuntur cumque aut, voluptate ut iure nihil, placeat molestias impedit culpa deleniti? Ullam enim reprehenderit perspiciatis! Quae distinctio delectus officia est enim! Vero doloremque, animi nam delectus nisi atque eligendi perferendis, libero aliquam earum voluptatem iusto adipisci ullam. Sapiente error optio voluptate quod hic cupiditate, magni qui dolores similique quos est laudantium reiciendis quasi ad molestiae praesentium eligendi non doloremque commodi dolorem ducimus? Reprehenderit in possimus at odio voluptatibus unde quae numquam pariatur voluptatem veritatis, illum nobis! Blanditiis sequi a ratione debitis magnam ea quo, molestiae ex, ab officiis eos in? Facilis a, dolor quaerat cum blanditiis aliquid adipisci ex. Inventore expedita et quod quidem distinctio esse cum magni minima rem accusamus quos veritatis qui, odio, molestias quae quis illo beatae voluptatibus mollitia? Doloremque, reprehenderit suscipit minima assumenda ab repellat. Nisi tempore id ipsa, dolores, harum nostrum similique repudiandae velit amet beatae molestias accusamus dolorem, repellendus consectetur saepe debitis blanditiis autem. Perspiciatis impedit dolorum quis tempora quam vero molestiae facilis error voluptatibus, neque ea ab porro repellat quia cupiditate hic, distinctio consectetur voluptates officia alias, similique incidunt nemo. Nihil fugiat earum vero quaerat natus eum sed neque ratione incidunt adipisci, non, consequatur obcaecati, ad at perferendis architecto expedita illo! Architecto fugiat totam obcaecati dignissimos est.
    </textarea>
    {/* Input ==> div > textarea (md)... output ==> div > div (html)*/}
    {/* continue snip html */}
  </li>

  return (
    <section>
      <button>Add Note</button>
      <ul className="js-snips-list">
        {/* snips need to be dynamically created */}
      </ul>
    </section>
  );
};