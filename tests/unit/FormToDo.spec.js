import { shallowMount, mount } from "@vue/test-utils";
import FormToDo from "@/components/FormToDo";

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(FormToDo);
});

afterEach(() => {
  wrapper.destroy();
});

describe("Button", () => {
  it("rendering form input for input to do item", () => {
    const form = wrapper.find('[data-testid="formToDo"]');
    expect(form.exists()).toBe(true);
  });

  it("emitted title value to do to card list and set title to null", async () => {
    const data = "activity 4";

    await wrapper.setData({ title: data });
    await wrapper.trigger("submit");

    const formSubmittedCalls = wrapper.emitted("formSubmitted");
    expect(formSubmittedCalls).toHaveLength(1);

    await wrapper.setData({ title : null});
    expect(wrapper.vm.title).toEqual(null);
  });

});
