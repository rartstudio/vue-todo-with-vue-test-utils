import { shallowMount } from "@vue/test-utils";
import CardItem from "@/components/CardItem";

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(CardItem, {
    propsData: {
      todo: "Write a story",
      index: 1
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe("CardItem", () => {
  it("display a element card", () => {
    const card = wrapper.findAll('[data-testid="card"]');
    expect(card.length).toBe(1);
  });

  it("accept data todo item from props", () => {
    const testData = "Write a story";
    const content = wrapper.find('[data-testid="card"]').element.textContent;
    expect(content).toEqual(testData);
  });

  it('emitting a todo item is done clicked', async () => {
    const todo = "activity 4"
    const content = wrapper.find('[data-testid="btnDone"]');
    expect(content.exists()).toBe(true);
    content.vm.$emit('doneToDo',todo)
    await content.vm.$nextTick();
    expect(content.emitted().doneToDo).toBeTruthy()
  })
});
