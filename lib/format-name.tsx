function transformForLink(name: string | null | undefined): string {
    // Check if the input is null, undefined, or an empty string
    if (!name) {
        return '';  // Return an empty string if the input is null, undefined, or an empty string
    }
    
    // Convert the name to lowercase
    let formattedName = name.toLowerCase();
    
    // Replace any non-alphanumeric characters (except '&') with hyphens
    formattedName = formattedName.replace(/[^a-z0-9&]+/g, '-');
    
    // Remove any leading or trailing hyphens
    formattedName = formattedName.replace(/^-+|-+$/g, '');

    // Return the cleaned-up string
    return formattedName;
}

export default transformForLink;
