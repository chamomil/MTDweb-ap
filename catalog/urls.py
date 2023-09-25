from django.conf import settings
from django.conf.urls.static import static
from django.urls import path

from .views import MoviesListView, DetailView, ConfirmReservation, ReserveTicket, ConfirmationHandler, MyTickets, \
    DeleteTicketView

urlpatterns = [
    path("", MoviesListView.as_view(), name="movies-list"),
    path("<int:pk>/", DetailView.as_view(), name="movie-details"),
    path(
        "confirm_pay/<int:pk>", ConfirmReservation.as_view(), name="confirm_pay"
    ),
    path("reserve-ticket", ReserveTicket.as_view(), name="reserve_ticket"),
    path(
        "confirm_handler", ConfirmationHandler.as_view(), name="confirm_handler"
    ),
    path("my_tickets", MyTickets.as_view(), name="my_tickets"),
    path(
        "my_tickets/<int:pk>/delete",
        DeleteTicketView.as_view(),
        name="my_tickets_delete",
    ),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
