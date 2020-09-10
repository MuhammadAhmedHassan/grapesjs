export default (editor) => {
  const blockManager = editor.BlockManager;

  blockManager.add("custom-card", {
    label: "Card",
    category: "Advanced",
    attributes: { class: "fa fa-address-card" },
    content: `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`,
  });
};
