import MegaDropdown from "./MegaDropdown";


const megaDropdownData = [
  {
    trigger: "Home",
    title: "Pressmart",
    description: "Home of quality appliances delivered to your doorstep.",
    items: [
      { href: "#", title: "About Us", desc: "Learn about our mission and values" },
      { href: "#", title: "Support", desc: "Get help and customer service assistance" },
      { href: "#", title: "Careers", desc: "Join our team and explore new opportunities" },
    ],
  },
  
];

function NavigationItem() {
  return (
    <nav className="flex gap-4">
      {megaDropdownData.map((dropdown, idx) => (
        <MegaDropdown
          key={idx}
          trigger={dropdown.trigger}
          title={dropdown.title}
          description={dropdown.description}
          items={dropdown.items}
        />
      ))}
    </nav>
  );
}

export default NavigationItem;