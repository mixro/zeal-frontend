import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { load, save } from '../lib/storage';

const QuoteContext = createContext(null);
const KEY = 'zeal.quote.items';

export function QuoteProvider({ children }) {
  const [items, setItems] = useState(() => load(KEY, []));
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => save(KEY, items), [items]);

  useEffect(() => {
    if (!toast) return undefined;
    const t = setTimeout(() => setToast(null), 3200);
    return () => clearTimeout(t);
  }, [toast]);

  const add = useCallback((product, qty = 1) => {
    setItems((prev) => {
      const found = prev.find((i) => i.slug === product.slug);
      if (found) return prev.map((i) => (i.slug === product.slug ? { ...i, qty: i.qty + qty } : i));
      return [...prev, { slug: product.slug, name: product.name, brand: product.brand, qty }];
    });
    setToast({ name: product.name, qty });
  }, []);

  const setQty = useCallback((slug, qty) => {
    setItems((prev) => prev.map((i) => (i.slug === slug ? { ...i, qty: Math.max(1, qty) } : i)));
  }, []);

  const removeItem = useCallback((slug) => setItems((prev) => prev.filter((i) => i.slug !== slug)), []);
  const clear = useCallback(() => setItems([]), []);

  const value = useMemo(
    () => ({
      items,
      count: items.reduce((n, i) => n + i.qty, 0),
      add,
      setQty,
      remove: removeItem,
      clear,
      open,
      setOpen,
      toast,
      dismissToast: () => setToast(null),
    }),
    [items, add, setQty, removeItem, clear, open, toast],
  );

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
}

export const useQuote = () => useContext(QuoteContext);
