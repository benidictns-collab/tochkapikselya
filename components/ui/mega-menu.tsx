import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export type MegaMenuItem = {
  id: number;
  label: string;
  subMenus?: {
    title: string;
    items: {
      label: string;
      description: string;
      icon: React.ElementType;
      href?: string;
      slug?: string;
    }[];
  }[];
  link?: string;
};

export interface MegaMenuProps
  extends React.HTMLAttributes<HTMLUListElement> {
  items: MegaMenuItem[];
  className?: string;
  onServiceSelect?: (slug: string) => void;
}

const MegaMenu = React.forwardRef<HTMLUListElement, MegaMenuProps>(
  ({ items, className, onServiceSelect, ...props }, ref) => {
    const [openMenu, setOpenMenu] = React.useState<string | null>(null);
    const [isHover, setIsHover] = React.useState<number | null>(null);

    const handleHover = (menuLabel: string | null) => {
      setOpenMenu(menuLabel);
    };

    return (
      <ul
        ref={ref}
        className={`relative flex items-center space-x-0 ${
          className || ""
        }`}
        {...props}
      >
        {items.map((navItem) => (
          <li
            key={navItem.label}
            className="relative"
            onMouseEnter={() => handleHover(navItem.label)}
            onMouseLeave={() => handleHover(null)}
          >
            {navItem.subMenus ? (
              <button
                className="relative flex cursor-pointer items-center justify-center gap-1 py-1.5 px-4 text-sm text-white/60 transition-colors duration-300 hover:text-yellow-400 group"
                onMouseEnter={() => setIsHover(navItem.id)}
                onMouseLeave={() => setIsHover(null)}
              >
                <span>{navItem.label}</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 group-hover:rotate-180 ${
                    openMenu === navItem.label ? "rotate-180" : ""
                  }`}
                />
                {(isHover === navItem.id || openMenu === navItem.label) && (
                  <div className="absolute inset-0 size-full bg-yellow-400/10 rounded-full" />
                )}
              </button>
            ) : (
              <a
                href={navItem.link || "#"}
                className="relative flex cursor-pointer items-center justify-center gap-1 py-1.5 px-4 text-sm text-white/60 transition-colors duration-300 hover:text-yellow-400 group"
                onMouseEnter={() => setIsHover(navItem.id)}
                onMouseLeave={() => setIsHover(null)}
              >
                <span>{navItem.label}</span>
                {isHover === navItem.id && (
                  <div className="absolute inset-0 size-full bg-yellow-400/10 rounded-full" />
                )}
              </a>
            )}

            <AnimatePresence>
              {openMenu === navItem.label && navItem.subMenus && (
                <div className="absolute left-0 top-full w-auto pt-2 z-50">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="w-max border border-yellow-400/20 bg-[#0A0A0A] p-4 rounded-2xl shadow-2xl shadow-black/50"
                  >
                    <div className="flex w-fit shrink-0 space-x-9 overflow-hidden">
                      {navItem.subMenus.map((sub) => (
                        <div key={sub.title} className="w-full">
                          <h3 className="mb-4 text-sm font-medium capitalize text-yellow-400/70">
                            {sub.title}
                          </h3>
                          <ul className="space-y-6">
                            {sub.items.map((item) => {
                              const Icon = item.icon;
                              return (
                                <li key={item.label}>
                                  <button
                                    onClick={() => {
                                      if (item.slug && onServiceSelect) {
                                        onServiceSelect(item.slug);
                                        setOpenMenu(null);
                                      }
                                    }}
                                    className="flex items-start space-x-3 group text-left"
                                  >
                                    <div className="flex size-9 shrink-0 items-center justify-center rounded-md border border-yellow-400/30 text-yellow-400 transition-colors duration-300 group-hover:bg-yellow-400 group-hover:text-black">
                                      <Icon className="h-5 w-5 flex-none" />
                                    </div>
                                    <div className="w-max leading-5">
                                      <p className="shrink-0 text-sm font-medium text-white">
                                        {item.label}
                                      </p>
                                      <p className="shrink-0 text-xs text-white/50 transition-colors duration-300 group-hover:text-yellow-400">
                                        {item.description}
                                      </p>
                                    </div>
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    );
  }
);

MegaMenu.displayName = "MegaMenu";

export default MegaMenu;