define(["knockout", "jquery", "typeahead",
"less!app/less/typeahead"], function (ko, $) {
	ko.bindingHandlers.typeahead = {
		update: function (element, valueAccessor, allBindings) {
			// http://stackoverflow.com/a/19366003/1247130 get value to update properly when typeahead choice is selected.

			var templateName = ko.unwrap(allBindings().templateName);
			var mapping = ko.unwrap(allBindings().mappingFunction);
			var displayedProperty = ko.unwrap(allBindings().displayKey);
			var value = allBindings.get('value');

			var url = ko.unwrap(valueAccessor());
			var auth = (allBindings.has('authToken')) ? {
				"Authorization": "Bearer " + ko.unwrap(allBindings().authToken)
			} : {};
			var remoteData = {
				url: url,
				ajax: {
					headers: auth
				}
			};
			var resultsLimit = allBindings.get("limit") || 10;

			var suggestions = new Bloodhound({
				datumTokenizer: function (token) {
					return Bloodhound.tokenizers.whitespace(token);
				},
				queryTokenizer: Bloodhound.tokenizers.whitespace,
				remote: remoteData,
				limit: resultsLimit
			});

			suggestions.initialize();

			$(element).typeahead('destroy');

			$(element)
				.typeahead({
					hint: true,
					highlight: true
				},
				{
					source: suggestions.ttAdapter(),
					displayKey: displayedProperty || function (item) {
						return item;
					},
					templates: {
						suggestion: function (item) {
							if (templateName) {
								var temp = document.createElement("div");
								var model = mapping ? mapping(item) : item;
								ko.renderTemplate(templateName, model, null, temp, "replaceChildren");

								return temp.innerHTML;
							}

							else {
								return item;
							}
						}
					}
				})
			.on("typeahead:selected typeahead:autocompleted", function (e, suggestion) {
				if (value && ko.isObservable(value)) {
					value(suggestion);
				}
			});
		}
	};
});