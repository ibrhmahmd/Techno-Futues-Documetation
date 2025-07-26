// Define the game levels and challenges
const gameLevels = [
    // Level 1: Single Property Challenges
    {
        level: 1,
        name: "Single Property Challenges",
        challenges: [
            {
                id: "1.1",
                title: "Row Layout",
                instructions: "Use <code>flex-direction: row</code> to arrange the cats in a horizontal row.",
                hint: "The default flex-direction is 'row', but you should explicitly set it for practice.",
                targetStyles: {
                    display: "flex",
                    flexDirection: "row"
                },
                requiredProperties: ["flex-direction"],
                targetPreview: {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center"
                }
            },
            {
                id: "1.2",
                title: "Column Layout",
                instructions: "Use <code>flex-direction: column</code> to arrange the cats in a vertical column.",
                hint: "Change the flex-direction to 'column' to stack items vertically.",
                targetStyles: {
                    display: "flex",
                    flexDirection: "column"
                },
                requiredProperties: ["flex-direction"],
                targetPreview: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center"
                }
            },
            {
                id: "1.3",
                title: "Horizontal Centering",
                instructions: "Use <code>justify-content: center</code> to center the cats horizontally.",
                hint: "The justify-content property aligns items along the main axis (horizontally in a row).",
                targetStyles: {
                    display: "flex",
                    justifyContent: "center"
                },
                requiredProperties: ["justify-content"],
                targetPreview: {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center"
                }
            },
            {
                id: "1.4",
                title: "Vertical Centering",
                instructions: "Use <code>align-items: center</code> to center the cats vertically.",
                hint: "The align-items property aligns items along the cross axis (vertically in a row).",
                targetStyles: {
                    display: "flex",
                    alignItems: "center"
                },
                requiredProperties: ["align-items"],
                targetPreview: {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center"
                }
            }
        ]
    },
    // Level 2: Two Property Combinations
    {
        level: 2,
        name: "Two Property Combinations",
        challenges: [
            {
                id: "2.1",
                title: "Reversed Row with Space Between",
                instructions: "Use <code>flex-direction: row-reverse</code> and <code>justify-content: space-between</code> to create a reversed row with space between cats.",
                hint: "row-reverse will flip the order, and space-between will create equal spacing with items at the edges.",
                targetStyles: {
                    display: "flex",
                    flexDirection: "row-reverse",
                    justifyContent: "space-between"
                },
                requiredProperties: ["flex-direction", "justify-content"],
                targetPreview: {
                    display: "flex",
                    flexDirection: "row-reverse",
                    justifyContent: "space-between",
                    alignItems: "center"
                }
            },
            {
                id: "2.2",
                title: "Column with Bottom Alignment",
                instructions: "Use <code>flex-direction: column</code> and <code>align-items: flex-end</code> to create a column with cats aligned to the right.",
                hint: "In a column layout, align-items controls horizontal alignment (the cross axis).",
                targetStyles: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end"
                },
                requiredProperties: ["flex-direction", "align-items"],
                targetPreview: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-end"
                }
            },
            {
                id: "2.3",
                title: "Perfect Centering",
                instructions: "Use <code>justify-content: center</code> and <code>align-items: center</code> to center cats both horizontally and vertically.",
                hint: "Combining these two properties creates perfect centering in a flex container.",
                targetStyles: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                },
                requiredProperties: ["justify-content", "align-items"],
                targetPreview: {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center"
                }
            }
        ]
    },
    // Level 3: All Properties Combined
    {
        level: 3,
        name: "All Properties Combined",
        challenges: [
            {
                id: "3.1",
                title: "Reversed Row with Even Spacing and Top Alignment",
                instructions: "Create a reversed row with cats evenly spaced and aligned to the top using <code>flex-direction: row-reverse</code>, <code>justify-content: space-evenly</code>, and <code>align-items: flex-start</code>.",
                hint: "space-evenly distributes items with equal spacing between and around them.",
                targetStyles: {
                    display: "flex",
                    flexDirection: "row-reverse",
                    justifyContent: "space-evenly",
                    alignItems: "flex-start"
                },
                requiredProperties: ["flex-direction", "justify-content", "align-items"],
                targetPreview: {
                    display: "flex",
                    flexDirection: "row-reverse",
                    justifyContent: "space-evenly",
                    alignItems: "flex-start"
                }
            },
            {
                id: "3.2",
                title: "Centered Column with Space Around",
                instructions: "Create a column with cats centered horizontally and with space around them vertically using <code>flex-direction: column</code>, <code>align-items: center</code>, and <code>justify-content: space-around</code>.",
                hint: "In a column, justify-content controls vertical spacing and align-items controls horizontal alignment.",
                targetStyles: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    alignItems: "center"
                },
                requiredProperties: ["flex-direction", "justify-content", "align-items"],
                targetPreview: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    alignItems: "center"
                }
            },
            {
                id: "3.3",
                title: "Final Challenge: Complex Arrangement",
                instructions: "Create a reversed column with cats aligned to the right and spaced between using <code>flex-direction: column-reverse</code>, <code>align-items: flex-end</code>, and <code>justify-content: space-between</code>.",
                hint: "This combines all three properties in their most complex form. Remember that in column-reverse, items start from the bottom.",
                targetStyles: {
                    display: "flex",
                    flexDirection: "column-reverse",
                    justifyContent: "space-between",
                    alignItems: "flex-end"
                },
                requiredProperties: ["flex-direction", "justify-content", "align-items"],
                targetPreview: {
                    display: "flex",
                    flexDirection: "column-reverse",
                    justifyContent: "space-between",
                    alignItems: "flex-end"
                }
            }
        ]
    }
];