import { shallowMount, mount } from "@vue/test-utils";
import CardList from "@/components/CardList";

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(CardList);
});

afterEach(() => {
  wrapper.destroy();
});

describe("CardList", () => {
  it("Display button to add a to do item", () => {
    const btn = wrapper.find('[data-testid="addToDo"]');
    expect(btn.exists()).toBe(true);
  });

  it("set default color btn add", async () => {
    await wrapper.setData({ config: "add" });
    expect(wrapper.vm.config).toBe("add");
  });

  it("Change color when user click button add to do", async () => {
    const btn = wrapper.find('[data-testid="addToDo"]');
    await btn.trigger("click");
    await wrapper.setData({ config: "close" });
    expect(wrapper.vm.config).toBe("close");

    await btn.trigger("click");
    await wrapper.setData({ config: "add" });
    expect(wrapper.vm.config).toBe("add");
  });

  it("display a form when user click", async () => {
    const btn = wrapper.find('[data-testid="addToDo"]');
    await btn.trigger("click");
    await wrapper.setData({ config: "close" });
    const input = wrapper.find('[data-testid="formToDo"]');
    expect(input.exists()).toBe(true);
  });

  it("accepting data from submitted calls in form component", async () => {
    const data = "activity 4";
    const expectedPayload = 'activity 4';
    await wrapper.setData({ config: "close" });
    const form = wrapper.find('[data-testid="formToDo"]');
    await form.trigger('formSubmitted');
    expect(data).toEqual(expectedPayload);
  });
});
