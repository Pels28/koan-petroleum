export const slugify = (str: string) => 
    str.toLowerCase()
       .replace(/\s+/g, '-')
       .replace(/[^\w\-]+/g, '');
  
  export const unslugify = (slug: string) => 
    slug.replace(/-/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());
  